import { getCustomRepository } from 'typeorm';
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from '../repositories/UserRepositories';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {

 //main class method
 async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
  //retrieving repository
  const complimentRepositories = getCustomRepository(ComplimentRepositories);
  const userRepositories = getCustomRepository(UsersRepositories);
 
  if (user_sender === user_receiver) {
    console.log("entrou aqui")
   throw new Error("Incorrect User Receiver");
  }

  const userReceiverExists = await userRepositories.findOne(user_receiver);

  if(!userReceiverExists) {
    throw new Error("User Receiver does not exists");
  }

  const compliment = complimentRepositories.create({ tag_id, user_receiver, user_sender, message });

  await complimentRepositories.save(compliment);

  return compliment;
 }
}

export { CreateComplimentService }