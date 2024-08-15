
import { Response } from "express";

export const respuesta = (res: Response, code: number, success: boolean, message: string, data: any, additionalInfo?: any,) => {
    return res.status(code).json({
        success: success,
        message: message,
        data,
        additionalInfo
    });
};


export interface IRespuestaFuncion {
    success: boolean,
    code: number,
    message: string,
    data: any,
    informacionAdicional?: any
};

export const getRespuestaCommon = (success: boolean, code: number, message: string = "", data: any = null, additionalInfo?: any): IRespuestaFuncion => {

    return {
        success,
        code,
        message,
        data,
        informacionAdicional: additionalInfo,
    };
};
