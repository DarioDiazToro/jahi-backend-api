require("dotenv").config();
import "reflect-metadata";
import { Server } from "./app";

const server = new Server();

server.listen();
