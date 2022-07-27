import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { AppError } from "../errors/appError";

export const authenticationMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const { headers: { authorization } } = request;
    const token = authorization?.split(" ")[1];
    if (!!token) {
        let pass = true;
        jwt.verify(token as string, "SECRET_KEY",async (error, {email}: any) => {
            const userRepository = AppDataSource.getRepository(User);            
            const user = await userRepository.findOne({ where: { usr_email: email } });            
            if (!!error) pass = false;
            request.user = { ...user } as any;
        });       
        
        if (!!!pass) {
            throw new AppError(401, "Invalid Token!")
        }
        !!pass && next();
    } else {
        throw new AppError(401, "Token not sent!")
    }
    
}