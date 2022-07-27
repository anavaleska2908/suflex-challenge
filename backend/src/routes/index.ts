import { Express } from "express";
import { userRouter } from "./user.route";
import { userLogin } from "./userLogin.route";
import { favoriteCharactersRouter } from "./favoriteCharacters.route";

export const AppRoutes = (app: Express) => {
    app.use("/users", userRouter);
    app.use("/login", userLogin);
    app.use("/favoritesCharacters", favoriteCharactersRouter);    
};