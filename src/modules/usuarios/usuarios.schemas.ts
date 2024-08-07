
import Joi from 'joi';

export const schemaCrearUsuario = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    activo: Joi.boolean().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),


});

export const schemaActualizarUsuario = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    activo: Joi.boolean().required(),
    password: Joi.string().optional(),
    correo: Joi.string().email().required(),
    documento_identificacion: Joi.string().required(),
    genero: Joi.string().required()

});

export const schemaActualizarPasswordUsuario = Joi.object({
    password: Joi.string().required(),
});
