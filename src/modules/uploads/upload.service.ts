
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";


export const subirImagen = (base64: any, codigo: string, extensionArchivo: string): { ok: boolean, ruta: string } => {
    try {
        const nombreArchivo = `${uuidv4()}.${extensionArchivo}`;
        const ruta = `${path.resolve('uploads')}/logos/${codigo}`;
        const rutaTotal = `${path.resolve('uploads')}/logos/${codigo}/${nombreArchivo}`;
        //Path para generar imagen


        //si no existe la ruta la crea
        if (!fs.existsSync(ruta)) {
            fs.mkdirSync(ruta, { recursive: true });
        }

        const base64Data = base64.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(rutaTotal, base64Data, 'base64', function (err: any) {
            console.log(err);
        });

        return {
            ok: true,
            ruta: `uploads/logos/${codigo}/${nombreArchivo}`
        }


    } catch (error) {

        console.log("Error subirImagen====>", error)
        return {
            ok: false,
            ruta: ''
        }
    }
}




export const eliminarImagen = (ruta: string): boolean => {
    try {

        fs.unlinkSync(ruta)
        return true;


    } catch (error) {

        console.log("Error eliminarImagen====>", error)
        return false
    }
};