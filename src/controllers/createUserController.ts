import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";

class CreateUserController{
    async handle(request: Request, response: Response){

        const { name, email, admin } = request.body; //buscando as infos que vem do front atraves de um json para serem manipuladas aqui no back-end
        
        const createUserServices = new CreateUserService();
        
        const user = await createUserServices.execute({name, email, admin});
        
        return response.json(user);
    }
}

export { CreateUserController };