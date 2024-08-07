import "reflect-metadata";
import express from "express";
import misRutas from "./router";
import morgan from "morgan";
import { AppDataSource } from "./config/data-source";

export class Server {


    private app: any;
    private port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;

        this.middlewares(),
            this.routes();
        this.connectionDb()

    }


    routes() {
        this.app.use(misRutas);
    }

    async connectionDb() {

        await AppDataSource.initialize()
            .then(() => {
                console.log("Database online");
            }).catch((error) => {
                console.log("=====>", error);
            })
    }
    middlewares() {
        // this.app.use(express.urlencoded({ extended: true }));
        //TODO: IMPORTANTE PARA LEER DATA DESDE REQ.DATA COMO JSON
        this.app.use(express.json({ limit: '2000mb' }))
        this.app.use(morgan('dev'))

    }



    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto", this.port);
        });
    }
};