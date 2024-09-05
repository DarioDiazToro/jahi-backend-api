import session from "express-session";
import cors from "cors";
import "reflect-metadata";
import express from "express";
import misRutas from "./router";
import morgan from "morgan";
import { AppDataSource } from "./config/data-source";

// mysql://root:jWWDmECbwfmJUBKfcWFmwtSxsfyZpgsu@autorack.proxy.rlwy.net:13901/railway

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
        this.app.use(cors({
            origin: process.env.URL_FRONTEND || 'http//localhost5173',
            credentials: true
        }));

        this.app.use(session({
            secret: process.env.SECRETSESSION || 'holadario',
            proxy: process.env.NODE_ENV === 'production',
            cookie: {
                secure: true,
                sameSite: 'none'
            }
        }))

    }



    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto", this.port);
        });
    }
};