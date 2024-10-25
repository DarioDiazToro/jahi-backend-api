
import { Request, Response, } from "express";
import { respuesta } from "../../common/response.common";
import { crearEjercicioService } from "./ejercicios.services";


export const crearEjercicio = async (req: Request, res: Response) => {
    try {
        const { ...datos } = req.body;
        const usuarioService = await crearEjercicioService(datos);

        return respuesta(res, usuarioService.code, true, usuarioService.message, usuarioService.data);

    } catch (error: any) {
        console.error("Error obtenerUsuariosController====>", error, error.message);
        return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    };

};



// export const actualizarEjercicioById = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;
//         const { estado, password, ...data } = req.body

//         const answer = await actualizarEjercicioByIdService(id, data);
//         return respuesta(res, answer.code, true, answer.message, answer.data);

//     } catch (error: any) {
//         console.error("Error ActualizarUsuarioByIdController====>", error, error.message);
//         return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     }
// };


// export const obtenerEjercicioById = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;
//         const answer = await obtenerEjercicioByIdService(id);
//         return respuesta(res, answer.code, true, answer.message, answer.data);

//     } catch (error: any) {
//         console.error("Error obtenerUsuarioByIdController====>", error, error.message);
//         return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     }

// };

// export const obtenerEjercicios = async (req: Request, res: Response) => {
//     try {
//         const answer = await obtenerEjerciciosService();
//         return respuesta(res, answer.code, answer.success, answer.message, answer.data);

//     } catch (error: any) {
//         console.error("Error obtenerUsuariosController====>", error, error.message);
//         return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     };

// };

// export const eliminarEjercicioById = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;

//         const answer = await deleteEjercicioByIdService(id);

//         return respuesta(res, answer.code, answer.success, answer.message, answer.data);

//     } catch (error: any) {
//         console.error("Error eliminarUsuarioByIdController====>", error, error.message);
//         return respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     };

// };
