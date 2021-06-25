import { Request, Response, NextFunction, response } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction){
    //verificar se o usuário é admin ou não
    const admin = true;
    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "User unautorized"
    })
}