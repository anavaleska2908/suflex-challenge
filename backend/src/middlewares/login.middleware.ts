import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import * as bcrypt from "bcryptjs";
import { AppError } from "../errors/appError";

export const verifyUserPasswordMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    let match = false;
    const { body: { email, password } } = request;
    if (!!email && !!password) {
        const user = await AppDataSource.getRepository(User).findOne({ where: { usr_email: email } })
        if (!!user) {
            match = bcrypt.compareSync(password, user?.usr_password)
            !!match && next();
        }
    }
    if(!!!match) throw new AppError(400, "Invalid email or password!")
}