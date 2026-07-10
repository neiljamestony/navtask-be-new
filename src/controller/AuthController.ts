import { generateHash, validateHashed, generateAccessToken, validateFields } from "./../utils/utils";
import { Request, Response } from "express"
import { createUser, getUserByUsername, checkUser } from '../model/User';
import { AuthErrorCode } from "../typescript/interface/UserInterface";
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
        const isUserExists = await getUserByUsername(username);

        if(isUserExists.length){
            return res.json({
                errors: [
                    {
                        key: "username",
                        error: "Name already exists!"
                    }
                ],
                msg: "Unprocessable Content",
                status: 422
            })
        }else{
            const hashedPassword = await generateHash(password);
            const user = await createUser({ username, password: hashedPassword, provider: "local" });
            
            if(Object.keys(user).length){
                return res.json({
                    msg: "Success!",
                    status: 200,
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

        const user = await getUserByUsername(body?.username);
        if(!user.length){
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
            const isMatch = await validateHashed(body?.password, user[0].password);
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
                    id: user[0].id,
                    username: user[0].username
                });
                res.cookie("token", accessToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: 24 * 60 * 60 * 1000
                });
                return res.json({ 
                    msg: "Success!", 
                    status: 200, 
                    errors: [],
                    data: {
                        userId: user[0].id,
                        username: user[0].username
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
        const userId = user?.id as string;
        const result = await checkUser(userId);
        res.json({
            data: {
                id: result[0].id,
                username: result[0].username
            },
            errors: [],
            status: 200,
            msg: "Authenticated"
        })
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
        return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

export const getUserData = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const userId = user?.id as string;
        const result = await checkUser(userId);
        res.json({
            data: {
                userId: result[0].id,
                username: result[0].username
            },
            errors: [],
            status: 200,
            msg: "Success!"
        })
    } catch (error) {
        console.error(error instanceof Error ? error.message : error)
       return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
    }
}

// export const google = async (req: Request, res: Response) => {
//     try {
//         return res.json({
//             msg: "Success",
//             status: 200
//         })
//     } catch (error) {
//         console.error(error instanceof Error ? error.message : error)
//         return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
//     }
// }

// export const googleCallback = async (req: Request, res: Response) => {
//     try {
//         const request = req.user;
//         const email = request?.email as string;
//         const isUserExists = await getUserByUsername(email);
//         let user;
        
//         if(!isUserExists.length){
//             user = await createUser({ username: email, provider: "google" });
//         }else{
//             user = isUserExists;
//         }

//         const accessToken = generateAccessToken({
//             id: user[0].id,
//             username: user[0].username
//         });

//     
//         res.cookie("token", accessToken, {
//             httpOnly: true,
//             secure: true,
//             sameSite: "lax",
//             maxAge: 15 * 60 * 1000,
//         });

//         return res.redirect(`http://localhost:5173/register?status=SUCCESS`)

//     } catch (error) {
//         console.error(error instanceof Error ? error.message : error)
//         return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
//     }
// }

// export const loginUsingGoogle = async (req: Request, res: Response) => {
//     try{

//     }catch(error){
//         console.error(error instanceof Error ? error.message : error)
//         return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
//     }
// }

// export const facebook = async (req: Request, res: Response) => {
//     try {
//         res.json({
//             msg: "Success",
//             status: 200
//         })
//     } catch (error) {
//         console.error(error instanceof Error ? error.message : error)
//         return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
//     }
// }

// export const facebookCallback = async (req: Request, res: Response) => {
//     try {
//         const request = req.user;
//         const email = request?.email as string;
//         const isUserExists = await getUserByUsername(email);

//         let user;
        
//         if(!isUserExists.length){
//             user = await createUser({ username: email, provider: "facebook" });
//         }else{
//             user = isUserExists;
//         }

//         const accessToken = generateAccessToken({
//             id: user[0].id,
//             username: user[0].username
//         });

//         res.cookie("token", accessToken, {
//             httpOnly: false,
//             secure: false,
//             sameSite: "lax",
//             maxAge: 15 * 60 * 1000
//         });

//         return res.redirect(`http://localhost:5173/register?status=SUCCESS`)

//     } catch (error) {
//         console.error(error instanceof Error ? error.message : error)
//         return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
//     }
// }

// export const loginUsingFacebook = async (req: Request, res: Response) => {
//     try{

//     }catch(error){
//         console.error(error instanceof Error ? error.message : error)
//         return res.json({ msg: AuthErrorCode.SOMETHING_WENT_WRONG, status: 500, errors: [] })
//     }
// }

export const logout = async (req: Request, res: Response) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
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