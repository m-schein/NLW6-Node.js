import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories"
import { hash } from "bcryptjs"

interface IUserRequest{
    name: string,
    email: string,
    admin?: boolean, //? para indicar que é um atributo opcional
    password: string
}
class CreateUserService{

     async execute({ name, email, admin, password } : IUserRequest){
         
         const usersRepository = getCustomRepository(UsersRepositories)

         const userAlreadyExists = await usersRepository.findOne({
            email //passa como parametro o atributo que quero pesquisar, email é único para cada usuário
         });

         if(!email){
            throw new Error("Email incorrect")
         }

         if (userAlreadyExists){
             throw new Error("User already exists")
         }

         const passwordHash = await hash(password, 8)
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user);
        return user;

     }
}

export { CreateUserService }