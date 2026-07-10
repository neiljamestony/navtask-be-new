import db from '../config/db';

export const createTask = async (task: { user_id: string, title: string, description: string, due_date: string, priority: string, status: string}) => {
    const { user_id, title, description, due_date, priority, status } = task;
    const result = await db.query(`
        INSERT INTO "NAVTASK".task
        (user_id, title, description, due_date, priority, status)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [user_id, title, description, due_date, priority, status]
    );
    return result.rows;
}

export const updateTask = async (task: { title: string, description: string, due_date: string, completed_date: string, priority: string, status: string, id: string, user_id: string }) => {
    const { title, description, due_date, completed_date, priority, status, id, user_id } = task;
    const result = await db.query(`
        UPDATE "NAVTASK".task 
        SET title = $1,
            description = $2,
            due_date = $3,
            priority = $5,
            completed_date =  $4,
            status = $6
        WHERE id = $7
        AND user_id = $8
        `,
    [title, description, due_date, completed_date, priority, status, id, user_id]
    );
    return result;
}

export const getTask = async (task_id: string, userId: string) => {
    const result = await db.query(
        `
        SELECT 
            task.id,
            task.user_id,
            task.title,
            task.due_date,
            task.description,
            task.completed_date,
            task.created_at,
            task.priority,
            task.status,
            COALESCE(s.subtasks_json, '[]'::json) AS subtasks,
            COALESCE(a.attachments_json, '[]'::json) AS attachments
        FROM "NAVTASK".task as task

        LEFT JOIN LATERAL (
            SELECT json_agg(
                json_build_object(
                    'id', sub.id,
                    'title', sub.title,
                    'status', sub.status
                ) ORDER BY sub.created_at ASC
            ) AS subtasks_json
            FROM "NAVTASK".subtask sub
            WHERE sub.task_id = task.id
        ) s ON true

        LEFT JOIN LATERAL (
            SELECT json_agg(
                json_build_object(
                    'id', att.id,
                    'task_id', att.task_id,
                    'file_name', att.file_name,
                    'original_name', att.original_name,
                    'url', att.file_path,
                    'mime_type', att.mime_type,
                    'file_size', att.file_size
                ) ORDER BY att.uploaded_at ASC
            ) AS attachments_json
            FROM "NAVTASK".attachments att
            WHERE att.task_id = task.id
        ) a ON true
        
        WHERE task.id = $1 
        AND task.user_id = $2
        `,
        [task_id, userId]
    );
    
    return result.rows;
}

export const getAllTask = async (user_id: string) => {
    const result = await db.query(
        `
        SELECT
            task.id,
            task.user_id,
            task.title,
            task.due_date,
            task.completed_date,
            task.created_at,
            task.priority,
            task.status,
            COALESCE(s.subtasks_json, '[]'::json) AS subtasks,
            COALESCE(a.attachments_json, '[]'::json) AS attachments
        FROM "NAVTASK".task as task
        
        LEFT JOIN LATERAL (
            SELECT json_agg(
                json_build_object(
                    'id', sub.id,
                    'title', sub.title,
                    'status', sub.status
                ) ORDER BY sub.created_at ASC
            ) AS subtasks_json
            FROM "NAVTASK".subtask sub
            WHERE sub.task_id = task.id
        ) s ON true

        LEFT JOIN LATERAL (
            SELECT json_agg(
                json_build_object(
                    'id', att.id,
                    'task_id', att.task_id,
                    'file_name', att.file_name,
                    'url', att.file_path,
                    'type', att.mime_type,
                    'size', att.file_size
                ) ORDER BY att.uploaded_at ASC
            ) AS attachments_json
            FROM "NAVTASK".attachments att
            WHERE att.task_id = task.id
        ) a ON true
        WHERE task.user_id = $1
        ORDER BY task.created_at DESC;
        `,
        [user_id]
    );
    
    return result.rows;
}

export const removeTask = async (task_ids: number[], userId: string) => {
    await db.query(
        `
        DELETE FROM "NAVTASK".task
        WHERE id = ANY($1::int[]) 
        AND user_id = $2
        `,
        [task_ids, userId]
    );
     await db.query(
        `
        DELETE FROM "NAVTASK".subtask
        WHERE task_id = ANY($1::int[])
        `,
        [task_ids]
    );
    await db.query(
        `
        DELETE FROM "NAVTASK".attachments
        WHERE task_id = ANY($1::int[]) 
        `,
        [task_ids]
    );
}