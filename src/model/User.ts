import db from '../config/db';
import { IUserAuthRequest } from '../typescript/interface/UserInterface';

export const getUserByUsername = async (username: string) => {
    const result = await db.query(
        `SELECT * FROM "NAVTASK".users
        WHERE username = $1
        `,
        [username]
    );
    return result.rows;
}

export const checkUser = async (user_id: string | number) => {
    const result = await db.query(
        `SELECT * FROM "NAVTASK".users
        WHERE id = $1
        `,
        [user_id]
    );
    return result.rows;
}

export const createUser = async (user: IUserAuthRequest) => {
    const { username, password, provider } = user;
    const result = await db.query(
    `
        INSERT INTO "NAVTASK".users
        (username, password, provider)
        VALUES($1, $2, $3)
        RETURNING *`,
        [username, password, provider]
    );
    return result.rows[0];
}