import { Router } from "express";
import FavoriteCharacterController from "../controllers/favoriteCharacters.controller";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";

export const favoriteCharactersRouter = Router();
favoriteCharactersRouter.use(authenticationMiddleware)
favoriteCharactersRouter.post("", FavoriteCharacterController.store);
favoriteCharactersRouter.get("/:id", FavoriteCharacterController.index);
favoriteCharactersRouter.delete("/:id", FavoriteCharacterController.delete);