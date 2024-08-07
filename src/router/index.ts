import { Router } from "express";

import routerUsuarios from "../modules/usuarios/usuarios.router";

const routes = Router();

const base = "/api/v1";



routes.use(`${base}/usuarios`, routerUsuarios);

export default routes;