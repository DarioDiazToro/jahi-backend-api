import { NextFunction, Request, Response } from "express"
import { respuesta } from "../common/response.common";

//TODO: TODOS LOS MIDDLEWARE TIENEN 3 ATRIBUTOS
export const joiValidateMiddleware = (schema: any) =>
    (req: Request, res: Response, next: NextFunction) => {
        const verificacion = schema.validate(req.body);
        if (verificacion.error) {
            // return res.status(422).json({
            //     success: false,
            //     message: verificacion.error.details[0].message,
            //     data: null
            // });
            const message = verificacion.error.details[0].message;
            return respuesta(res, 422, false, message, null);
        };
        next();
    }