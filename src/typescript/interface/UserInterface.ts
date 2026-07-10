import { JwtPayload } from "jsonwebtoken";
export interface IUserAuthRequest {
    username: string;
    password?: string;
    provider?: string;
}

export interface AuthErrorCode {
  TOKEN_EXPIRED: string,
  INVALID_TOKEN: string,
  UNAUTHORIZED: string,
  SOMETHING_WENT_WRONG: string,
  SESSION_EXPIRED: string,
  UNPROCESSABLE_CONTENT: string
}

export interface AuthHeader extends JwtPayload {
  id: string;
  username: string;
}

export const AuthErrorCode: AuthErrorCode = {
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  INVALID_TOKEN: "INVALID_TOKEN",
  UNAUTHORIZED: "UNAUTHORIZED",
  SOMETHING_WENT_WRONG: "SOMETHING_WENT_WRONG",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  UNPROCESSABLE_CONTENT: "UNPROCESSABLE_CONTENT"
}

export interface IFileUpload {
  task_id: string;
  filename: string;
  originalname: string;
  path: string;
  mimetype: string;
  size: number;
}

export interface IUpdateFileUpload {
  id?: number,
  task_id: string;
  file_name: string;
  original_name: string;
  path: string;
  mime_type: string;
  file_size: number;
}