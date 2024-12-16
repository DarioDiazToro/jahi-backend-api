
import { Request, Response, } from "express";
import { actualizarPasswordUsuarioService, actualizarUsuarioByIdService, crearUsuarioService, deleteUsuarioByIdService, emailExisteService, obtenerUsuarioByIdService, obtenerUsuariosService } from "./usuarios.services";
import { respuesta } from "../../common/response.common";


export const crearUsuario = async (req: Request, res: Response) => {
    try {

        const usuarioService = await crearUsuarioService(req.body);

        return respuesta(res, usuarioService.code, true, usuarioService.message, usuarioService.data);

    } catch (error: any) {
        console.error("Error obtenerUsuariosController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    };

};



export const actualizarUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const { activo, password, ...data } = req.body


        const answer = await actualizarUsuarioByIdService(id, data);
        return respuesta(res, answer.code, true, answer.message, answer.data);

    } catch (error: any) {
        console.error("Error ActualizarUsuarioByIdController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }
};


export const obtenerUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const answer = await obtenerUsuarioByIdService(id);
        return respuesta(res, answer.code, true, answer.message, answer.data);

    } catch (error: any) {
        console.error("Error obtenerUsuarioByIdController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }

};

export const obtenerUsuarios = async (req: Request, res: Response) => {
    try {
        const answer = await obtenerUsuariosService();
        return respuesta(res, answer.code, answer.success, answer.message, answer.data, answer.informacionAdicional);
    } catch (error: any) {
        console.error("Error obtenerUsuariosController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    };

};

export const eliminarUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const answer = await deleteUsuarioByIdService(id);

        return respuesta(res, answer.code, answer.success, answer.message, answer.data);

    } catch (error: any) {
        console.error("Error eliminarUsuarioByIdController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    };

};


export const actualizarPassword = async (req: Request, res: Response) => {

    try {
        const { email } = req.params;
        // const { passwordNueva, passwordAntigua, confirmarPasswordNueva } = req.body;
        const { ...data } = req.body;

        const answer = await actualizarPasswordUsuarioService(email, data);
        return respuesta(res, answer.code, answer.success, answer.message, answer.data);

    } catch (error: any) {
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }
};


export const emailExiste = async (req: Request, res: Response) => {

    try {
        const { email } = req.params;


        const answer = await emailExisteService(email);

        return respuesta(res, answer.code, answer.success, answer.message, answer.data);

    } catch (error: any) {
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }
};