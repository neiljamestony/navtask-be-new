import { generateHash, validateHashed, generateAccessToken, validateFields } from "./../utils/utils";
import { Request, Response } from "express"
import { AuthErrorCode } from "../typescript/interface/UserInterface";
import { checkUserData, createUser, getAllUser, getUserData } from "../model/User";
import { PROVIDER_TYPE } from "../typescript/interface/Enums";
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const errors = validateFields(body);

        if(errors.length){
            return res.json({errors: errors, msg: AuthErrorCode.UNPROCESSABLE_CONTENT, status: 422 })
        }

        const { username, password } = body;
        const isUserExists = await checkUserData(username);

        if(isUserExists){
            return res.json({
                errors: [
                    {
                        key: "username",
                        error: "Name already exists!"
                    }
                ],
                msg: AuthErrorCode.UNPROCESSABLE_CONTENT,
                status: 422
            })
        }else{
            const hashedPassword = await generateHash(password);
            const local_provider = PROVIDER_TYPE["local" as keyof typeof PROVIDER_TYPE];
            const user = await createUser(username, hashedPassword, local_provider);
            if(user){
                return res.json({
                    msg: "Success!",
                    status: 200,
                    errors: []
                })
            }else{
                return res.json({
                    msg: "Error: Failed to create an account!",
                    status: 500,
                    errors: []
                })
            }
        };
    }catch(error: unknown){
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const errors = validateFields(body);
        
        if(errors.length){
            return res.json({errors: errors, msg: AuthErrorCode.UNPROCESSABLE_CONTENT, status: 422 })
        }

        const user = await checkUserData(body?.username);

        if(!user){
             return res.json({ 
                msg: AuthErrorCode.UNPROCESSABLE_CONTENT, 
                status: 422,
                errors: [
                    {
                        key: "username",
                        error: "Invalid Username!"
                    }
                ] 
            })
        }else{
            const isMatch = await validateHashed(body?.password, user.password);
            if(!isMatch){
                return res.json({ 
                    msg: AuthErrorCode.UNPROCESSABLE_CONTENT, 
                    status: 422,
                    errors: [
                        {
                            key: "password",
                            error: "Invalid Credentials!"
                        }
                    ] 
                })
            }else{
                const accessToken = await generateAccessToken({
                    id: user.id,
                    username: user.username
                });
                res.cookie("token", accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    maxAge: 24 * 60 * 60 * 1000
                });
                return res.json({ 
                    msg: "Success!", 
                    status: 200, 
                    errors: [],
                    data: {
                        userId: user.id,
                        username: user.username
                    }
                })
            }
        }
    } catch (error: unknown) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const hasAccess = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const userId = Number(user?.id);
        const result = await getUserData(userId);
        if(result){
            res.json({
                data: {
                    id: result.id,
                    username: result.username
                },
                errors: [],
                status: 200,
                msg: "Authenticated"
            })
        }
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const userId = Number(user?.id);
        const result = await getUserData(userId);

        if(result){
            res.json({
                data: {
                    userId: result.id,
                    username: result.username
                },
                errors: [],
                status: 200,
                msg: "Authenticated"
            })
        }

    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
       return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const checkDbConnection = async (req: Request, res: Response) => {
    try {
        const result = await getAllUser();
        res.json(result)
    } catch (error) {
    console.error(error instanceof Error ? error.message : error)
       return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}
export const google = async (req: Request, res: Response) => {
    try {
        return res.json({
            msg: "Success",
            status: 200
        })
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const googleCallback = async (req: Request, res: Response) => {
    try {
        const request = req.user;
        const flow = req.query.state;
        const email = request?.email as string;
        const isUserExists = await checkUserData(email);

        if(flow === "/register") {
            if(isUserExists){
                return res.redirect(`${process.env.CLIENT_URL}/login?status=DATA_EXISTS`)
            }else{
                const local_provider = PROVIDER_TYPE["googlefb_and_google" as keyof typeof PROVIDER_TYPE];
                const user = await createUser(email, "", local_provider);

                const accessToken = await generateAccessToken({
                    id: user.id,
                    username: email
                });

                res.cookie("token", accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    maxAge: 24 * 60 * 60 * 1000
                });

                return res.redirect(`${process.env.CLIENT_URL}/login?status=SUCCESS&userId=${user.id}&username=${user.username}`)
            }
        }

        if(flow === "/login"){
            if(!isUserExists){
                return res.redirect(`${process.env.CLIENT_URL}/login?status=ACCOUNT_NOT_FOUND`)
            }else{
                const user = await checkUserData(email);
                if(user){
                    const accessToken = await generateAccessToken({
                        id: user.id,
                        username: email
                    });
                    res.cookie("token", accessToken, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "none",
                        maxAge: 24 * 60 * 60 * 1000
                    });
                    return res.redirect(`${process.env.CLIENT_URL}/login?status=SUCCESS&userId=${user.id}&username=${user.username}`)
                }else{
                    return res.redirect(`${process.env.CLIENT_URL}/login?status=ACCOUNT_NOT_FOUND`)
                }
            }
        }
        
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const facebook = async (req: Request, res: Response) => {
    try {
        res.json({
            msg: "Success",
            status: 200
        })
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const facebookCallback = async (req: Request, res: Response) => {
    try {
        const request = req.user;
        const flow = req.query.state;
        const email = request?.email as string;
        const isUserExists = await checkUserData(email);

        if(flow === "/register") {
            if(isUserExists){
                return res.redirect(`${process.env.CLIENT_URL}/login?status=DATA_EXISTS`)
            }else{
                const local_provider = PROVIDER_TYPE["facebook" as keyof typeof PROVIDER_TYPE];
                const user = await createUser(email, "", local_provider);

                const accessToken = await generateAccessToken({
                    id: user.id,
                    username: email
                });

                res.cookie("token", accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    maxAge: 24 * 60 * 60 * 1000
                });

                return res.redirect(`${process.env.CLIENT_URL}/login?status=SUCCESS&userId=${user.id}&username=${user.username}`)
            }
        }

        if(flow === "/login"){
            if(!isUserExists){
                return res.redirect(`${process.env.CLIENT_URL}/login?status=ACCOUNT_NOT_FOUND`)
            }else{
                const user = await checkUserData(email);
                if(user){
                    const accessToken = await generateAccessToken({
                        id: user.id,
                        username: email
                    });
                    res.cookie("token", accessToken, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "none",
                        maxAge: 24 * 60 * 60 * 1000
                    });
                    return res.redirect(`${process.env.CLIENT_URL}/login?status=SUCCESS&userId=${user.id}&username=${user.username}`)
                }else{
                    return res.redirect(`${process.env.CLIENT_URL}/login?status=ACCOUNT_NOT_FOUND`)
                }
            }
        }
        
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });

        return res.json({
            msg: "Logged out successfully!",
            status: 200,
            errors: []
        })
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}