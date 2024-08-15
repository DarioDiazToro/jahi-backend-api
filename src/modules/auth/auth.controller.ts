import { Response, Request } from "express";
import { loginService } from "./auth.services";
import { respuesta } from "../../common/response.common";



export const login = async (req: Request, res: Response) => {

    const answer = await loginService(req.body);

    console.log("body====>", req.body);
    res.status(answer.code).json({
        msg: answer.msg,
        usuario: answer.data,
        token: answer.token
    });
};