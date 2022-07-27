import { Express } from "express";
import { userLogin } from "./userLogin.route";
import { userRouter } from "./user.route";

export const AppRoutes = (app: Express) => {
    app.use("/users", userRouter);
    app.use("/login", userLogin)
    
};