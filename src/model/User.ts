import prisma from '../lib/prisma';
import { provider_type } from '../generated/prisma';

export const getUserData = async (user_id: number) => {
    return await prisma.users.findUnique({
        where: {
            id: user_id
        }
    })
}

export const checkUserData = async (username: string) => {
    return await prisma.users.findUnique({
        where: {
            username: username
        }
    })
}

export const createUser = async (username: string, password: string, provider: provider_type) => {
   return await prisma.users.create({
        data: {
            username,
            password,
            provider
        }
   })
}