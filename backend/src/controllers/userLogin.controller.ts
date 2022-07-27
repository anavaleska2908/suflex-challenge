import { Request, Response } from "express";
import { userLoginService } from "../services/Login/userLogin.service";

export class UserLoginController {
    static store = async (request: Request, response: Response) => {
        const { body: { email, password } } = request;
        const { token, user } = await userLoginService({ usr_email: email, usr_password: password })
    console.log("request.user ", request.user)
        
        return response.status(200).json({
            id: user?.id,
            name: user?.usr_name,
            email: user?.usr_email,
            created_at: user?.usr_created_at,
            token
        })
    }
}