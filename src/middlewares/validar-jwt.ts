import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";



export const validarJWT = (req: Request, res: Response, next: NextFunction) => {


    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion",
        });
    };

    try {

        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY!);

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no valido",
        });
    };
};