import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization; 

    if(!authToken){
        return res.status(401).end();
    }

    const [,token] = authToken.split(" ")
   
    try{
        const { sub } = verify(token, "d19ea0a67f9296d0e53bff7437f4b376") as IPayload;

        req.user_id = sub;
        
        return next();
    }catch(err){
        return res.status(401).end();
    }

}