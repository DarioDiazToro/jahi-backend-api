import { IRespuestaFuncion, getRespuestaCommon } from "../../common/response.common";
import { UsuariosEntity } from "../../models/usuario";

import bcryptjs from "bcryptjs";

export const crearUsuarioService = async (datos: any): Promise<IRespuestaFuncion> => {
    try {
        const { email } = datos;
        const userExistente = await UsuariosEntity.findOne({ where: { email } });
        if (userExistente) {
            return getRespuestaCommon(false, 422, `El correo ${email} ya existe en la base de datos`, null);
        }
        const newUsuario = await UsuariosEntity.create(datos);
        const { password } = newUsuario;


        const salt = bcryptjs.genSaltSync();
        newUsuario.password = bcryptjs.hashSync(password, salt);

        const usuarioGuardado = await UsuariosEntity.save(newUsuario);

        return getRespuestaCommon(true, 200, "Usuario creado con éxito", usuarioGuardado);

    } catch (error: any) {
        console.error("Error crearUsuario====>", error, error.message);
        return getRespuestaCommon(false, 500, "Ocurrió un error al crear el usuario", null);
    }
};

export const actualizarUsuarioByIdService = async (id: any, datos: any): Promise<IRespuestaFuncion> => {

    try {
        const { activo, ...data } = datos;
        const usuario = await UsuariosEntity.findBy({ id });


        if (usuario.length === 0) {

            return getRespuestaCommon(true, 422, `No existe en la base de datos id -${id}`, null);

        };

        await UsuariosEntity.update(id, data);

        const usuarioActualizado = await UsuariosEntity.findOne({ where: { id } });


        return getRespuestaCommon(true, 200, "actualizar ok", usuarioActualizado)


    } catch (error: any) {

        console.error("Error actualixarUsuarioByIdService ====>", error, error.message);

        return getRespuestaCommon(false, 422, "No se logro actualizar ", { detailError: error.message });
    };

};

export const obtenerUsuarioByIdService = async (id: any): Promise<IRespuestaFuncion> => {

    try {
        const usuario = await UsuariosEntity.findBy({ id });

        if (usuario.length < 1) {

            return getRespuestaCommon(true, 422, `No existe en la DB id - ${id}`);
        }

        return getRespuestaCommon(true, 200, "obtener user ok", usuario);

    } catch (error: any) {
        console.error("Error obtenerUsuarioByIdService ====>", error, error.message);

        return getRespuestaCommon(false, 422, "No se logro obtener el usuario", null, { detailError: error.message });

    }
};


export const obtenerUsuariosService = async (): Promise<IRespuestaFuncion> => {

    try {
        const usuarios = await UsuariosEntity.findBy({ activo: true });
        const totalUsuarios = await UsuariosEntity.countBy({ activo: true });


        return getRespuestaCommon(true, 200, "Obtener todos ok", usuarios, { totalUsuarios });

    } catch (error: any) {
        console.error("Error obtenerUsuariosService ====>", error, error.message);

        return getRespuestaCommon(false, 422, "No se logro obtener los usuarios", null, { detailError: error.message })

    };

};


export const deleteUsuarioByIdService = async (id: any): Promise<IRespuestaFuncion> => {

    try {
        const item = await UsuariosEntity.findBy({ id });

        const usuario = item[0];

        if (!usuario) {

            return getRespuestaCommon(false, 422, `No existe un usuario en la DB con id - ${id} `, null);

        };

        await UsuariosEntity.update({ id }, { activo: false });
        const usuarioEliminado = await UsuariosEntity.findOne({ where: { id } });

        return getRespuestaCommon(true, 200, "eliminar ok", usuarioEliminado);

    } catch (error: any) {

        console.error("Error deleteUsuarioByIdService ====>", error, error.message);

        return getRespuestaCommon(false, 422, "no se logro eliminar el usuario", null, { detailError: error.message });

    };
}



export const actualizarPasswordUsuarioService = async (email: string, password: string, passwordAntigua: string): Promise<IRespuestaFuncion> => {


    try {


        const [usuario] = await UsuariosEntity.findBy({ email: email });


        if (!usuario) {
            return getRespuestaCommon(false, 422, `El usuario con el correo ${email} no existe en la base de datos`);

        };

        const validarPassword = bcryptjs.compareSync(passwordAntigua, usuario.password);


        if (!validarPassword) {
            console.log("usuario passoword db", usuario.password, "<password body", passwordAntigua);
            return getRespuestaCommon(false, 422, "contraseña antigua es incorrecta", null);
        };

        const salt = bcryptjs.genSaltSync();

        const nuevaPassword = bcryptjs.hashSync(password, salt);

        const actualizado = await UsuariosEntity.update({ email: email }, { password: nuevaPassword })

        if (!actualizado) {

            return getRespuestaCommon(false, 422, "No se logro actualizar la contraseña");
        };

        return getRespuestaCommon(true, 200, "Contraseña actualizada");

    } catch (error: any) {
        console.error("Error actualizarPasswordUsuarioSerivice ====>", error, error.message);

        return getRespuestaCommon(true, 422, "No se logro actualizar la contraseña", null, { detailError: error.message });

    }

};

