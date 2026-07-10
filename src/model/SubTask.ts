import db from '../config/db';

export const createSubTask = async (task_id: string, subTask: {title: string, status: string}) => {
    const { title, status } = subTask;
    const result = await db.query(
        `
        INSERT INTO "NAVTASK".subtask
        (task_id, title, status)
        VALUES($1, $2, $3)
        `,
        [task_id, title, status]
    );
    
    return result.rows;
}

export const getSubTask = async (id: string) => {
    const result = await db.query(`
        SELECT * FROM "NAVTASK".subtask,
        WHERE id = $1
        `,
        [id]
    );
    return result.rows;
}

export const getAllSubTask = async (task_id: string) => {
    const result = await db.query(`
        SELECT * FROM "NAVTASK".subtask
        WHERE task_id = $1
        `,
        [task_id]
    );
    return result.rows;
}

export const getAllSubtasksId = async (task_id: string) => {
    const result = await db.query(`
        SELECT id FROM "NAVTASK".subtask
        WHERE task_id = $1
        `,
        [task_id]
    );
    return result.rows;
}

export const updateSubTask = async (subTask: { title: string, status: string, id: string }) => {
    const { title, status, id } = subTask;
    const result = await db.query(`
        UPDATE "NAVTASK".subtask
        SET title = $1,
            status = $2
        WHERE id = $3
    `,[title, status, id]
    );
    return result.rows;
}

export const removeSubTask = async (id: number) => {
    const result = await db.query(`
        DELETE FROM "NAVTASK".subtask
        WHERE id = $1
        `
    ,[id]);

    return result.rows; 
}

export const removeSubTasks = async (task_ids: number[]) => {
    const result = await db.query(
        `
        DELETE FROM "NAVTASK".subtask
        WHERE task_id = ANY($1::int[]) 
        `,
        [task_ids]
    );
    
    return result.rows;
}