import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";

class CreateUserController{
    async handle(request: Request, response: Response){
        try{
            const { name, email, admin, password } = request.body; //buscando as infos que vem do front atraves de um json para serem manipuladas aqui no back-end
        
            const createUserServices = new CreateUserService();
            
            const user = await createUserServices.execute({name, email, admin, password});
            
            return response.json(user);
        }catch(err){
            return response.status(400).json({error: err.message})
        }
      
    }
}

export { CreateUserController };