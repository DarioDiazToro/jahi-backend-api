
import { Request, Response, } from "express";
import { actualizarPasswordUsuarioService, actualizarUsuarioByIdService, crearUsuarioService, deleteUsuarioByIdService, obtenerUsuarioByIdService, obtenerUsuariosService } from "./usuarios.services";
import { respuesta } from "../../common/response.common";


export const crearUsuario = async (req: Request, res: Response) => {
    const { ...datos } = req.body;
    try {
        const usuarioService = await crearUsuarioService(datos);

        return respuesta(res, usuarioService.code, true, usuarioService.msg, usuarioService.data);

    } catch (error) {
        console.log("Error crearUsuarioController ====>", error);
        const usuarioService = await crearUsuarioService(datos);

        return respuesta(res, usuarioService.code, true, usuarioService.msg, usuarioService.data);

    };

};



export const actualizarUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const { estado, password, ...data } = req.body

        const answer = await actualizarUsuarioByIdService(id, data);
        return respuesta(res, answer.code, true, answer.msg, answer.data);

    } catch (error: any) {
        console.error("Error ActualizarUsuarioByIdController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }
};


export const obtenerUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const answer = await obtenerUsuarioByIdService(id);
        return respuesta(res, answer.code, true, answer.msg, answer.data);

    } catch (error: any) {
        console.error("Error obtenerUsuarioByIdController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }

};

export const obtenerUsuarios = async (req: Request, res: Response) => {
    try {
        const answer = await obtenerUsuariosService();
        return respuesta(res, 200, true, "obtener todos ok", answer);

    } catch (error: any) {
        console.error("Error obtenerUsuariosController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    };

};

export const eliminarUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const answer = await deleteUsuarioByIdService(id);

        return respuesta(res, answer.code, true, answer.msg, answer.data);

    } catch (error: any) {
        console.error("Error eliminarUsuarioByIdController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    };

};


export const actualizarPassword = async (req: Request, res: Response) => {

    try {
        const { documento } = req.params;
        const { password } = req.body;

        const answer = await actualizarPasswordUsuarioService(documento, password);
        return respuesta(res, answer.code, answer.success, answer.message, answer.data);

    } catch (error: any) {
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }
};

