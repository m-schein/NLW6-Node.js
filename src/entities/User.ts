import {
    Entity, 
    PrimaryColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from "uuid"

@Entity("users") //dentro da entidade é o nome da tabela, nesse caso, 'users'
class User {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){ //se id vier como nulo, undefined, vazio...
            this.id = uuid()
        }
    }
}

export { User };
//Entidade < - > ORM < - > DB (users)
