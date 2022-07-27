import "express-async-errors";
import { AppRoutes } from "./routes";
import { AppError } from "./errors/appError";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

export const app = express();
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());
AppRoutes(app);
app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});