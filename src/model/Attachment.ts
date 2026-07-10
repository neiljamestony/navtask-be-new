import db from '../config/db';
import { IFileUpload, IUpdateFileUpload } from '../typescript/interface/UserInterface';

export const createAttachment = async ({ task_id, filename, originalname, path, mimetype, size }: IFileUpload) => {
    const result = await db.query(`
        INSERT INTO "NAVTASK".attachments
        (task_id, file_name, original_name, file_path, mime_type, file_size)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [task_id, filename, originalname, path, mimetype, size]
    );
    return result.rows;
}

export const updateAttachment = async ({ file_name, original_name, path, mime_type, file_size, id, task_id}: IUpdateFileUpload) => {
    const result = await db.query(`
        UPDATE "NAVTASK".attachments
        SET 
            file_name = $1,
            original_name = $2,
            file_path = $3,
            mime_type = $4,
            file_size = $5
        WHERE 
            id = $6
        AND task_id = $7
        RETURNING *`,
        [file_name, original_name, path, mime_type, file_size, id, task_id]
    );
    return result.rows;
}

export const removeAttachment = async (id: number) => {
    const result = await db.query(
        `
        DELETE FROM "NAVTASK".attachments
        WHERE id = $1
        `,
        [id]
    );
    
    return result.rows;
}

export const getAttachment = async (task_id: string) => {
    const result = await db.query(
        `
        SELECT * FROM "NAVTASK".attachments
        WHERE task_id = $1
        `,
        [task_id]
    );
    
    return result.rows;
}

export const checkAttachment = async (task_id: number) => {
    const result = await db.query(
        `
        SELECT id, file_path, original_name, mime_type FROM "NAVTASK".attachments
        WHERE task_id = $1
        `,
        [task_id]
    );
    return result.rows;
}

export const removeAttachments = async (task_ids: number[]) => {
    const result = await db.query(
        `
        DELETE FROM "NAVTASK".attachments
        WHERE task_id = ANY($1::int[])
        `,
        [task_ids]
    );
    
    return result.rows;
}

export const checkAttachments = async (task_ids: string[]) => {
   const result = await db.query(
        `
        SELECT task_id FROM "NAVTASK".attachments
        WHERE task_id =  ANY($1::int[])
        `,
        [task_ids]
    );
    
    return result.rows;
}