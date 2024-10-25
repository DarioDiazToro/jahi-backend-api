import { IRespuestaFuncion, getRespuestaCommon } from "../../common/response.common";
import { EjerciciosEntity } from "../../models/ejercicio";
import { subirImagen } from "../uploads/upload.service";


export const crearEjercicioService = async (datos: any): Promise<IRespuestaFuncion> => {
    try {

        let { imagen_entrenamiento, codigo, extension } = datos;

        // let ejercicio: any;

        const { nombre_entrenamiento, objetivo } = datos;

        const nombreEjercioDB = await EjerciciosEntity.findOne({ where: { nombre_entrenamiento } });
        const objetivoDB = await EjerciciosEntity.findOne({ where: { objetivo } });

        if (nombreEjercioDB) {
            return getRespuestaCommon(false, 422, `El nombre del ejercicio ${nombreEjercioDB.nombre_entrenamiento} ya existe en la base de datos`, null);
        }
        if (objetivoDB) {
            return getRespuestaCommon(false, 422, `El nombre del objetivo ${objetivoDB.objetivo} ya existe en la base de datos`, null);
        }

        const newEjercicio = EjerciciosEntity.create(datos);



        const ejercicio = newEjercicio;

        const { ok, ruta } = subirImagen(imagen_entrenamiento, codigo, extension);

        if (!ok) {
            return getRespuestaCommon(false, 422, "No fue posible subir la imagen", null);
        }

        console.log(ejercicio);
        ejercicio.imagen_entrenamiento = ruta;


        const ejercicioGuardado = await EjerciciosEntity.save(newEjercicio);
        return getRespuestaCommon(true, 200, "Ejercicio creado con éxito", ejercicioGuardado);

    } catch (error: any) {
        console.error("Error crearEjercicio====>", error, error.message);
        return getRespuestaCommon(false, 500, "Ocurrió un error al crear el ejercicio", null);
    }
};

// export const actualizarEjercicioByIdService = async (id: any, datos: any) => {

//     try {
//         const usuario = await UsuariosEntity.findBy({ id });


//         if (usuario.length === 0) {

//             return getRespuestaCommon(true, 422, `No existe en a base de datos id -${id}`, null);

//         };

//         await UsuariosEntity.update(id, datos);

//         const usuarioActualizado = await UsuariosEntity.findOne({ where: { id } });


//         return getRespuestaCommon(true, 200, "actualizar ok", usuarioActualizado)


//     } catch (error: any) {

//         console.error("Error actualixarUsuarioByIdService ====>", error, error.message);

//         return getRespuestaCommon(false, 422, "No se logro actualizar ", { detailError: error.message });
//     };

// };

// export const obtenerEjercicioByIdService = async (id: any) => {

//     try {
//         const usuario = await UsuariosEntity.findBy({ id });

//         if (usuario.length < 1) {

//             return getRespuestaCommon(true, 422, `No existe en la DB id - ${id}`);
//         }

//         return getRespuestaCommon(true, 200, "obtener user ok", usuario);

//     } catch (error: any) {
//         console.error("Error obtenerUsuarioByIdService ====>", error, error.message);

//         return getRespuestaCommon(false, 422, "No se logro obtener el usuario", null, { detailError: error.message });

//     }
// };


// export const obtenerEjerciciosService = async () => {

//     try {
//         const usuarios = await UsuariosEntity.findBy({ activo: true });
//         const totalUsuarios = await UsuariosEntity.countBy({ activo: true });


//         return getRespuestaCommon(true, 200, "Obtener todos ok", usuarios, { totalUsuarios });

//     } catch (error: any) {
//         console.error("Error obtenerUsuariosService ====>", error, error.message);

//         return getRespuestaCommon(false, 422, "No se logro obtener los usuarios", null, { detailError: error.message })

//     };

// };


// export const deleteEjercicioByIdService = async (id: any): Promise<IRespuestaFuncion> => {

//     try {
//         const item = await UsuariosEntity.findBy({ id });

//         const usuario = item[0];

//         if (!usuario) {

//             return getRespuestaCommon(false, 422, `No existe un usuario en la DB con id - ${id} `, null);

//         };

//         await UsuariosEntity.update({ id }, { activo: false });
//         const usuarioEliminado = await UsuariosEntity.findOne({ where: { id } });

//         return getRespuestaCommon(true, 200, "eliminar ok", usuarioEliminado);

//     } catch (error: any) {

//         console.error("Error deleteUsuarioByIdService ====>", error, error.message);

//         return getRespuestaCommon(false, 422, "no se logro eliminar el usuario", null, { detailError: error.message });

//     };
// }
