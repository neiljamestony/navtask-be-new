import { generateHash, validateHashed, generateAccessToken, validateFields } from "./../utils/utils";
import { Request, Response } from "express"
import { AuthErrorCode } from "../typescript/interface/UserInterface";
import { checkUserData, createUser, getUserData } from "../model/User";
import dotenv from 'dotenv';
import { PROVIDER_TYPE } from "../typescript/interface/Enums";

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
                msg: "Unprocessable Content",
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
                    secure: false,
                    sameSite: "lax",
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