import { Response, Request } from "express";
import { loginService } from "./auth.services";
import { transporter } from "../../config/mailer";




export const login = async (req: Request, res: Response) => {
    console.log("Iniciando login")
    const answer = await loginService(req.body);

    res.status(answer.code).json({
        msg: answer.msg,
        usuario: answer.data,
        token: answer.token
    });
};