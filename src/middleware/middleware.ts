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