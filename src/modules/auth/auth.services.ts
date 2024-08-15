
import { any } from "joi";
import { generarJWT } from "../../helpers/generar-Jwt";
import { UsuariosEntity } from "../../models/usuario";
import bcryptjs from "bcryptjs";


export const loginService = async (datos: any) => {

    try {
        const { password, email } = datos;
        const usuario = await UsuariosEntity.findOne({ where: { email: email } });

        console.log("user by email=====>", usuario);
        if (!usuario) {
            return {
                code: 422,
                msg: "contraseña / correo no son correctos - correo",
                data: null
            };
        }

        if (!usuario.activo) {
            return {
                code: 422,
                msg: "Usuario / contraseña no son correctos - activo: false",
                data: null
            };
        };



        const validarPassword = bcryptjs.compareSync(password, usuario.password!);


        if (!validarPassword) {
            return {
                code: 422,
                msg: "Usuario / contraseña no son correctos - contraseña",
                data: null
            };
        };

        const token = await generarJWT({ id: usuario.id });

        return {
            msg: "login ok",
            code: 200,
            data: usuario,
            token
        };


    } catch (error: any) {
        console.log("Error al loguearse ========>", error.message);
        return {
            code: 500,
            msg: "Hable con el administrador",
            data: null
        };
    };
};
