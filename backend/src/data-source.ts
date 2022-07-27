import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";

//configs para uso local e testes
const AppDataSource = process.env.NODE_ENV === "test" ? new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USER_TEST,
    password: process.env.USER_PASSWORD,
    database: process.env.USER_DB,
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
}) : new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;