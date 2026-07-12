import { task_status, task_priority } from '../generated/prisma';
import prisma from '../lib/prisma';
import { convertToDbDate } from '../utils/utils';

export const createTask = async (user_id: number, title: string, description: string, due_date: string, priority: task_priority, status: task_status) => {
    return await prisma.task.create({
        data: {
            user_id,
            title,
            description,
            due_date: convertToDbDate(due_date),
            status,
            priority
        }
    })
}

export const updateTask = async (id: string, user_id: number, title: string, description: string, due_date: string, priority: task_priority, status: task_status, completed_date: string | null) => {
    return await prisma.task.update({
        where: {
            id, 
            user_id,
        },
        data: {
            title,
            description,
            due_date: convertToDbDate(due_date),
            priority,
            status,
            completed_date: completed_date === "" ? null : convertToDbDate(completed_date ?? "")
        }
    })
}

export const getTask = async (id: string, userId: number) => {
    return await prisma.task.findFirst({
        where: {
            id,
            user_id: userId,
        },
        include: {
            subtask: {
                select: {
                    id: true,
                    title: true,
                    status: true,
                },
                orderBy: {
                    created_at: "asc",
                },
            },
            attachments: {
                select: {
                    id: true,
                    task_id: true,
                    file_name: true,
                    original_name: true,
                    file_path: true,
                    mime_type: true,
                    file_size: true,
                },
                orderBy: {
                    uploaded_at: "asc",
                },
            },
        },
    })
}

export const getAllTask = async (user_id: number) => {
    return await prisma.task.findMany({
        where: {
            user_id,
        },
        orderBy: {
            created_at: "desc",
        },
        include: {
            subtask: {
                select: {
                    id: true,
                    title: true,
                    status: true,
                },
                orderBy: {
                    created_at: "asc",
                },
            },

            attachments: {
                select: {
                    id: true,
                    task_id: true,
                    file_name: true,
                    original_name: true,
                    file_path: true,
                    mime_type: true,
                    file_size: true,
                },
                orderBy: {
                    uploaded_at: "asc",
                },
            },
        },
    })
}

export const removeTask = async (ids: string[], user_id: number) => {
    return await prisma.task.deleteMany({
        where: {
            id: {
                in: ids,
            },
            user_id,
        },
    })
}