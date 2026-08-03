import { JwtPayload } from "jsonwebtoken";
declare global {
  namespace Express {
    interface User extends JwtPayload {
      passportId?: string;
      email?: string;
      name?: string;
      id: string;
      username: string;
    }
  }
}

export {};