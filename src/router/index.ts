import { Router } from "express";

import routerUsuarios from "../modules/usuarios/usuarios.router";
import routerLogin from "../modules/auth/auth.router";
import routerEjercicio from "../modules/Ejercicios/ejercicios.router";



const routes = Router();

const base = "/api/v1";



routes.use(`${base}/usuarios`, routerUsuarios);
routes.use(`${base}/auth`, routerLogin);
routes.use(`${base}/ejercicios`, routerEjercicio);





export default routes;