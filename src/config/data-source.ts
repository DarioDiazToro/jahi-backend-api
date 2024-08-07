
import { DataSource } from "typeorm";
import { UsuariosEntity } from "../models/usuario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "jahi",
    synchronize: true,
    logging: false,
    entities: [UsuariosEntity],
    subscribers: [],
    migrations: [],
});