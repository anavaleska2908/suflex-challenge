import { Express } from "express";
import { userRouter } from "./user.route";

export const AppRoutes = (app: Express) => {
    app.use("/users", userRouter);
};