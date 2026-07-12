import prisma from "../lib/prisma";

export const createAttachment = async (task_id: string, file_name: string, original_name: string, file_path: string, mime_type: string, file_size: number) => {
  return await prisma.attachments.create({
    data: {
        task_id,
        file_name,
        original_name,
        file_path,
        mime_type,
        file_size
    }
  }) 
}

export const removeAttachment = async (id: number) => {
    return await prisma.attachments.delete({
        where: {
            id
        }
    })
}