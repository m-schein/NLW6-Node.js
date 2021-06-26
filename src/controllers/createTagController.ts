import { json } from "body-parser";
import {Request, Response} from "express";
import { CreateTagService } from "../services/createTagService"

class CreateTagController{
    async handle(req: Request, res: Response){
        const { name } = req.body;
        const createTagService = new CreateTagService();
        const tag = await createTagService.execute(name);
        return res.json(tag);
    }
}

export { CreateTagController }