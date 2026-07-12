import prisma from '../lib/prisma';
import { subtask_status } from '../generated/prisma';
import { SUBTASK_STATUS } from '../typescript/interface/Enums';

export const createSubTask = async (subtask: { title: string, status: subtask_status, task_id: string }) => {
    const status = SUBTASK_STATUS[subtask.status as keyof typeof SUBTASK_STATUS];
    return await prisma.subtask.create({
        data: {
            ...subtask,
            status
        }
    })
}

export const getAllSubTask = async (task_id: string) => {
}

export const getAllSubtasksId = async (task_id: string) => {
    return await prisma.subtask.findMany({
        where: {
            task_id
        },
        select: {
            id: true
        }
    })
}

export const updateSubTask = async (task_id: string, id: number, subtask: { title: string, status: subtask_status }) => {
    const status = SUBTASK_STATUS[subtask.status as keyof typeof SUBTASK_STATUS];
    return await prisma.subtask.update({
        where: {
            task_id,
            id,
        },
        data: {
            ...subtask,
            status
        }
    })
}

export const removeSubTask = async (id: number) => {
    return await prisma.subtask.delete({
        where: {
            id
        }
    })
}