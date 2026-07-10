import { createTask, updateTask, removeTask, getTask, getAllTask } from "../model/Task";
import { checkUser } from "../model/User";
import { createAttachment, updateAttachment, removeAttachment, checkAttachment } from "../model/Attachment";
import { createSubTask, updateSubTask, getAllSubtasksId, removeSubTask } from "../model/SubTask";
import { Request, Response } from "express";
import dayjs from "dayjs";
import { validateFields } from "../utils/utils";

export const create = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const files = (req.files as unknown as Express.Multer.File[]) || [];
        const user = req.user;
        const userId = user?.id as string;
        const subTasks = JSON.parse(body?.subTasks);
        const userExist = await checkUser(userId);
        const errors = validateFields(body);

        if(errors.length){
            return res.json({errors: errors, msg: "Unprocessable Content", status: 422 })
        }

        if(!userExist.length){
            return res.json({
                msg: "Invalid request!",
                status: 401,
                errors: []
            })
        }
    
        const task = await createTask(
            { user_id: userId, 
                title: body?.title, 
                description: body?.description, 
                due_date: body?.due_date, 
                priority: body?.priority, 
                status: body?.status 
            }
        );

        if(task.length > 0){
            const task_id = task[0].id;
            if(files){
                await Promise.all(
                    files.map(async (file) => {
                        await createAttachment({
                            task_id,
                            filename: file?.filename ?? "", 
                            originalname: file?.originalname ?? "", 
                            path: file?.path ?? "", 
                            mimetype: file?.mimetype ?? "", 
                            size: Number(file?.size) ?? ""
                        })
                    })
                )
            }
            for (const subTask of subTasks) {
                await createSubTask(task_id, subTask);
            }
            return res.json({
                msg: "Task created successfully!",
                status: 200
            })
        }else{
            return res.json({
                msg: "Failed to create task!",
                status: 401,
                errors: []
            })
        }
    }catch(error){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

export const update = async (req: Request, res: Response) => {
    try{
        const user = req.user;
        const userId = user?.id as string;
        const body = req.body;
        const files = (req.files as unknown as Express.Multer.File[]) || [];
        const existingAttachments = JSON.parse(body?.existingAttachments);
        const task_id = body?.id;
        const subTasks = JSON.parse(body?.subtasks);
        const attachmentId = JSON.parse(body?.attachmentId);
        const userExist = await checkUser(userId);
        const errors = validateFields(body);

        if(errors.length){
            return res.json({errors: errors, msg: "Unprocessable Content", status: 422 })
        }

        if(!userExist.length){
            return res.json({
                msg: "Invalid request!",
                status: 401,
                errors: []
            })
        }

        const task = await updateTask(
            { 
                user_id: userId, 
                title: body?.title, 
                description: body?.description, 
                due_date: body?.due_date, 
                priority: body?.priority, 
                status: body?.status, 
                completed_date: body?.completed_date === "" ? null : body?.completed_date, 
                id: body?.id
            }
        );

        const result = task.rowCount ?? 0;
        
        if(result > 0){
            if(files.length > 0){
                await Promise.all(
                    files.map(async (file) => {
                        await createAttachment({
                            task_id, 
                            filename: file?.filename ?? "", 
                            originalname: file?.originalname ?? "", 
                            path: file?.path ?? "", 
                            mimetype: file?.mimetype ?? "", 
                            size: Number(file?.size) ?? ""
                        })
                    })
                )

                const convertedExistingAttachments = existingAttachments.map((item: { id: number }) => item.id).map(Number);
                const itemsToRemove = attachmentId.filter((item: number) => !convertedExistingAttachments.includes(item))
                if(itemsToRemove.length > 0){
                    await Promise.all(
                        itemsToRemove.map(async (item: number) => {
                            await removeAttachment(item);
                        })
                    )
                }

            }else{
                if(existingAttachments.length < 1){
                    await Promise.all(
                        attachmentId.map(async (id: number) => {
                            await removeAttachment(id);
                        })
                    )
                }else{
                    const convertedExistingAttachments = existingAttachments.map((item: { id: number }) => item.id).map(Number);
                    const itemsToRemove = attachmentId.filter((item: number) => !convertedExistingAttachments.includes(item))
                    if(itemsToRemove.length > 0){
                        await Promise.all(
                            itemsToRemove.map(async (item: { id: number }) => {
                                await removeAttachment(item.id);
                            })
                        )
                    }
                }
            }
            
            if(subTasks){
                const subtasks = await getAllSubtasksId(task_id);
                const subTasksIdsRequests = subTasks.map((subTask: {title: string, status: string, id?: string | number }) => ({ id: Number(subTask.id) }));
                const itemFromDB = subtasks.map((item: { id: number }) => ({ id: Number(item.id) }));
                const requestsItems = new Set(subTasksIdsRequests.map((i: { id: number }) => i.id));
                const subtasksToRemove = itemFromDB.filter((i: { id: number }) => !requestsItems.has(i.id))

                if(subtasksToRemove.length > 0){
                    await Promise.all(
                        subtasksToRemove.map(async (item: { id: number }) => {
                            await removeSubTask(item.id)
                        })
                    )
                }

                for (const subTask of subTasks) {
                    if (subTask?.id) {
                        await updateSubTask(subTask);
                    } else {
                        await createSubTask(task_id, subTask);
                    }
                }
            }

            return res.json({
                msg: "Task updated successfully!",
                status: 200
            })
        }else{
            return res.json({
                msg: "Task failed to update!",
                status: 401,
                errors: []
            })
        }
    }catch(error){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

export const get = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const user = req?.user;
        const userId = user?.id as string;
        const { id } = body;
        const task = await getTask(id, userId);
        let newResult;

        if(task.length > 0){
            const due_date = dayjs(task[0].due_date).format("YYYY-MM-DD");
            const created_at = dayjs(task[0].created_at).format("YYYY-MM-DD");
            const newAttachments = task[0].attachments;
            const attachmentId = newAttachments.length > 0 ? newAttachments.map(
                (item: {
                    id: number,
                    task_id: number,
                    file_name: string,
                    original_name: string,
                    url: string,
                    mime_type: string,
                    file_size: number
                }) => item.id
            ) : [];

            if(task[0].attachments.length > 0){
                const attachments = task[0].attachments.map((item: {
                    id: number,
                    task_id: number,
                    file_name: string,
                    original_name: string,
                    url: string,
                    mime_type: string,
                    file_size: number
                }) => ({
                    id: item.id,
                    url: `${req.protocol}://${req.get("host")}/uploads/${item.file_name}`,
                    name: item.original_name,
                    size: item.file_size,
                    type: item.mime_type,
                    file_name: item.file_name
                })) 
                newResult = {...task[0], due_date, created_at, attachments, attachmentId }
            }else{
                newResult = {...task[0], due_date, created_at, attachments: [], attachmentId: [] }
            }
        }else{
            newResult = task
        }
        return res.json(newResult)
    }catch(error: unknown){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try{
        const user = req.user;
        const userId = user?.id as string;
        const tasks = await getAllTask(userId);
        res.json(tasks)
    }catch(error: unknown){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

export const remove = async (req: Request, res: Response) => {
    try{
        const user = req.user;
        const userId = user?.id as string;
        const body = req.body;
        const { ids } = body;
        await removeTask(ids, userId);
        return res.json({
            msg: "Task removed successfully!",
            status: 200
        })
    }catch(error: unknown){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}