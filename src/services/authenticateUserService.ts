import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
            const usersRepositories = getCustomRepository(UsersRepositories);
        

        const user = await usersRepositories.findOne({ //verificar se email ja existe
            email
        })

        if(!user){
            throw new Error("Email/Password incorrect");
        }
        
        const passwordMatch = await compare(password, user.password)
        
        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }
        
        const token = sign(
        {
            email: user.email,
        }, 
        "d19ea0a67f9296d0e53bff7437f4b376", 
        {
            subject: user.id,
            expiresIn: "1d",
        });

        return token;
    }

}

export { AuthenticateUserService }