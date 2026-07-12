import { createTask, updateTask, removeTask, getTask, getAllTask } from "../model/Task";
import { getUserData } from "../model/User";
import { createAttachment, removeAttachment } from "../model/Attachment";
import { createSubTask, updateSubTask, getAllSubtasksId, removeSubTask } from "../model/SubTask";
import { Request, Response } from "express";
import dayjs from "dayjs";
import { TASK_STATUS, SUBTASK_STATUS, REVERTED_TASK_STATUS, REVERTED_SUBTASK_STATUS, TASK_PRIORITY } from "../typescript/interface/Enums";
import { validateFields } from "../utils/utils";
import prisma from "../lib/prisma";

export const create = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const files = (req.files as unknown as Express.Multer.File[]) || [];
        const user = req.user;
        const userId = Number(user?.id);
        const subTasks = JSON.parse(body?.subTask);
        const task_status = TASK_STATUS[body?.status as keyof typeof TASK_STATUS];
        const task_priority = TASK_PRIORITY[body?.priority as keyof typeof TASK_PRIORITY];
        const errors = validateFields(body);
        const userExist = await getUserData(userId);

        if(errors.length){
            return res.json({errors: errors, msg: "Unprocessable Content", status: 422 })
        }

        if(!userExist){
            return res.json({
                msg: "Invalid request!",
                status: 401,
                errors: []
            })
        }
        
        const task = await createTask(userId, body?.title, body?.description, body?.due_date, task_priority, task_status);

        if(task){
            const task_id = task.id;
            if(files && files.length > 0){
                await Promise.all(
                    files.map(async (file) => {
                        await createAttachment(task_id, file?.filename, file?.originalname, file?.path, file?.mimetype, Number(file?.size))
                    })
                )
            }
            for (const subTask of subTasks) {
                await prisma.subtask.create({
                    data: {
                        task_id,
                        ...subTask
                    }
                })
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
        const userId = Number(user?.id);
        const body = req.body;
        const files = (req.files as unknown as Express.Multer.File[]) || [];
        const existingAttachments = JSON.parse(body?.existingAttachments);
        const task_id = body?.id;
        const subTasks = JSON.parse(body?.subtask);
        const attachmentId = JSON.parse(body?.attachmentId);
        const errors = validateFields(body);
        const task_status = TASK_STATUS[body?.status as keyof typeof TASK_STATUS];

        const userExist = await prisma.users.findUnique({
            where: {
                id: userId
            }
        });

        if(errors.length){
            return res.json({errors: errors, msg: "Unprocessable Content", status: 422 })
        }

        if(!userExist){
            return res.json({
                msg: "Invalid request!",
                status: 401,
                errors: []
            })
        }

        const task = await updateTask(body?.id, userId, body?.title, body?.description, body?.due_date, body?.priority, task_status, body?.completed_date)
        
        if(task){
            if(files.length > 0){
                await Promise.all(
                    files.map(async (file) => {
                        await createAttachment(task_id, file?.filename, file?.originalname, file?.path, file?.mimetype, Number(file?.size))
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
                        await updateSubTask(task_id, subTask?.id, subTask);
                    } else {
                        await createSubTask({...subTask, task_id});
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
        const userId = Number(user?.id);
        const { id } = body;
        const task = await getTask(id, userId)
        let newResult;
        if(task){
            const due_date = dayjs(task.due_date).format("YYYY-MM-DD");
            const created_at = dayjs(task.created_at).format("YYYY-MM-DD");
            const newAttachments = task.attachments;
            const attachmentId = newAttachments.length > 0 ? newAttachments.map(item => item.id) : [];
            const attachments = newAttachments.length > 0 ? newAttachments.map(item => ({
                id: item.id,
                url: `${req.protocol}://${req.get("host")}/uploads/${item.file_name}`,
                name: item.original_name,
                size: Number(item.file_size),
                type: item.mime_type,
                file_name: item.file_name,
            })) : [];
            const subtask = task.subtask.length > 0 ? 
                task.subtask.map(sub => ({
                    ...sub,
                    status: sub.status
                    ? REVERTED_SUBTASK_STATUS[sub.status]
                    : null
                })) : [];
            newResult = {...task, status: task.status ? REVERTED_TASK_STATUS[task.status] : null, due_date, created_at, attachments, attachmentId, subtask }
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
        const userId = Number(user?.id);
        const tasks = await getAllTask(userId)
        if(tasks){
            const formattedTasks = tasks.map(task => ({
                ...task,
                status: task.status ? REVERTED_TASK_STATUS[task.status] : null,
                subtask: task.subtask.map(sub => ({
                    ...sub,
                    status: sub.status
                    ? REVERTED_SUBTASK_STATUS[sub.status]
                    : null,
                })),
                attachments: task.attachments.map(att => ({
                    ...att,
                    file_size: att.file_size ? Number(att.file_size) : null,
                })),
            }));
            res.json(formattedTasks)
        }
    }catch(error: unknown){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

export const remove = async (req: Request, res: Response) => {
    try{
        const user = req.user;
        const userId = Number(user?.id);
        const body = req.body;
        const { ids } = body;
        const result = await removeTask(ids, userId);
        if(result){
            return res.json({
                msg: "Task removed successfully!",
                status: 200
            })
        }else{
            return res.json({
                msg: "Errror: Failed to remove task!",
                status: 500
            })
        }
    }catch(error: unknown){
        console.error(error instanceof Error ? error.message : error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}