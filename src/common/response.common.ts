
import { Response } from "express";

export const respuesta = (res: Response, code: number, success: boolean, message: string, data: any,) => {
    return res.status(code).json({
        success: success,
        message: message,
        data,
    });
};


export interface IRespuestaFuncion {
    success: boolean,
    code: number,
    message: string,
    data: any,
    informacionAdicional?: any
};

export const getRespuestaCommon = (success: boolean, code: number, message: string = "", data: any = null, additionalInfo: object = {}): IRespuestaFuncion => {

    return {
        success,
        code,
        message,
        data,
        informacionAdicional: additionalInfo,
    };
};
