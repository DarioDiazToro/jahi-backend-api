
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

import { actualizarPassword, actualizarUsuarioById, crearUsuario, eliminarUsuarioById, emailExiste, obtenerUsuarioById, obtenerUsuarios, } from "./usuarios.controller";
import { schemaActualizarUsuario, schemaCrearUsuario, schemaActualizarPasswordUsuario } from "./usuarios.schemas";





const router = Router();


router.post("/register",
    [
        joiValidateMiddleware(schemaCrearUsuario)
    ],
    crearUsuario);

router.put("/:id", [
    joiValidateMiddleware(schemaActualizarUsuario)
], actualizarUsuarioById);

router.put("/actualizar-password/:email", [joiValidateMiddleware(schemaActualizarPasswordUsuario)], actualizarPassword);

router.get("/:id", [], obtenerUsuarioById);
router.get("/", [], obtenerUsuarios);
router.get("/email-existe/:email", [], emailExiste);



router.delete("/:id", [], eliminarUsuarioById);

export default router;