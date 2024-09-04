
import { DataSource } from "typeorm";
import { UsuariosEntity } from "../models/usuario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOSTDB || "Localhost",
    port: Number(process.env.PORTDB) || 3306,
    username: process.env.USER || "root",
    password: process.env.PASSWORDDB || "",
    database: process.env.DB || "jahi",
    synchronize: true,
    logging: false,
    entities: [UsuariosEntity],
    subscribers: [],
    migrations: [],
});