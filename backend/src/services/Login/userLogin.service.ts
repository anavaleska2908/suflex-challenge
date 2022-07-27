import { ILogin } from "../../interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import jwt from "jsonwebtoken";

export const userLoginService = async ({ usr_email, usr_password }: ILogin) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { usr_email } });
    const token = jwt.sign({email: usr_email, password: usr_password}, "SECRET_KEY", {
        //subject: user?.id,
        expiresIn: "24h",
    } as any);    
    return {user, token}
}