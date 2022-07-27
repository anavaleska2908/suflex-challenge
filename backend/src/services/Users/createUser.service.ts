import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUser } from "../../interfaces";
export const createUserService = async ({ usr_name, usr_email, usr_password }: IUser) => {
    const usersRepository = AppDataSource.getRepository(User);
    const user = usersRepository.create({
        usr_name,
        usr_email,
        usr_password: hashSync(usr_password, 8),
    });
    await usersRepository.save(user);
    return user;
}