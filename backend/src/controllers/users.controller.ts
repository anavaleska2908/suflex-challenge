import { Request, Response } from "express";
import { createUserService } from "../services/Users/createUser.service";

export class UserController {
    static store = async (request: Request, response: Response) => {
        const { body: { name, email, password }, } = request;
        let { id, usr_name,usr_email,usr_created_at } = await createUserService({
            usr_name: name,
            usr_email: email,
            usr_password: password,
        });
        
        return response.status(201).json({
            id,
            name: usr_name,
            email: usr_email,
            created_at: usr_created_at,
        });
    
    };
}