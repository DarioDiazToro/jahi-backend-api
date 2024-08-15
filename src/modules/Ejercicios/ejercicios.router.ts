
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { crearEjercicio } from "./ejercicios.controller";
import { schemaCrearEjercicio } from "./ejercicios.schemas";
import { schemaActualizarUsuario } from "../usuarios/usuarios.schemas";
import { actualizarUsuarioById } from "../usuarios/usuarios.controller";



const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearEjercicio)
    ],
    crearEjercicio);

// router.put("/:id", [
//     joiValidateMiddleware(schemaActualizarUsuario)
// ], actualizarUsuarioById);

// // router.put("/actualizar-password/:email", [joiValidateMiddleware(schemaActualizarPasswordUsuario)], actualizarPassword);

// router.get("/:id", [], obtenerUsuarioById);
// router.get("/", [], obtenerUsuarios);


// router.delete("/:id", [validarJWT], eliminarUsuarioById);

export default router;