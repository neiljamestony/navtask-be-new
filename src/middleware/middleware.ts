import { Request, Response, NextFunction } from "express";
import { AuthErrorCode } from "../typescript/interface/UserInterface";
import jwt, {TokenExpiredError, JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';
import { getEnv } from "../utils/utils";

dotenv.config();
const secret = getEnv("JWT_ACCESS_SECRET");

interface UserPayload extends JwtPayload {
  id: string;
  username: string;
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({
        msg: AuthErrorCode.UNAUTHORIZED,
        data: [],
        status: 401
      });
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded as UserPayload;
    next();
  } catch (error: unknown) {
    if(error instanceof TokenExpiredError){
      return res.status(401).json({
        msg: AuthErrorCode.TOKEN_EXPIRED,
        data: [],
        status: 401
      });
    }
    return res.status(401).json({
        msg: AuthErrorCode.UNAUTHORIZED,
        data: [],
        status: 401
    });
  }
};
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token = req.cookies.token;
//     console.log(token, 'token')
//     if (!token) {
//       return res.json({
//         msg: AuthErrorCode.UNAUTHORIZED,
//         data: [],
//         status: 401
//       });
//     }

//     let decoded: any;

//     console.log(token, 'token')

//     try {
//       decoded = jwt.verify(token, secret);
//       const userId = decoded?.id;
//       const session = await findRefreshTokenForThisUser(userId);
//       console.log(session, 'session')
//       if(!session.is_expired){
//           req.user = decoded
//           next();
//       }else{
//           return res.json({
//               msg: AuthErrorCode.TOKEN_EXPIRED,
//               data: [],
//               status: 401
//           });
//       }

//     } catch (error: unknown) {
//         if(error instanceof TokenExpiredError){
          
//           const payload = jwt.decode(token) as any;
//           const userId = payload?.id;
//           if (!userId) {
//               console.log('no user id in the decoded payload for expired token')
//               return res.json({
//                   msg: AuthErrorCode.UNAUTHORIZED,
//                   data: [],
//                   status: 401
//               });
//           }
//           const session = await findRefreshTokenForThisUser(userId);

//           if (session.is_expired) {
//               return res.json({
//                   msg: AuthErrorCode.TOKEN_EXPIRED,
//                   data: [],
//                   status: 401
//               });
//           }

//           const newAccessToken = await generateAccessToken(payload);
//           decoded = jwt.verify(newAccessToken, secret);
//           res.cookie("token", newAccessToken, {
//               httpOnly: true,
//               secure: false,
//               sameSite: "lax",
//               maxAge: 15 * 60 * 1000
//           });
//           req.user = decoded
//           next();
//         }
//     }

//   } catch (err: unknown) {
//     console.log(err instanceof Error ? err.message : err)
//     return res.json({
//       msg: AuthErrorCode.SOMETHING_WENT_WRONG,
//       data: [],
//       status: 500
//     });
//   }
// };