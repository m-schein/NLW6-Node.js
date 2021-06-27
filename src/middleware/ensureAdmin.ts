import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    //verificar se o usuário é admin ou não
    
    const { user_id } = req;
    const usersRepositories = getCustomRepository(UsersRepositories);
    const { admin }  = await usersRepositories.findOne(user_id);

    if(admin){
        return next();
    }

    return res.status(401).json({
        error: "User unautorized"
    })
}