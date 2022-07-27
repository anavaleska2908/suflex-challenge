import { Router } from "express";
import { UserLoginController } from "../controllers/userLogin.controller";
import { verifyUserPasswordMiddleware } from "../middlewares/login.middleware";

export const userLogin = Router();
userLogin.use(verifyUserPasswordMiddleware)
userLogin.post("", UserLoginController.store)