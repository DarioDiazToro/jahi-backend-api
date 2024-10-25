
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
    activo: Joi.boolean(),
    password: Joi.string().optional(),
    email: Joi.string().email().required(),


});

export const schemaActualizarPasswordUsuario = Joi.object({
    passwordAntigua: Joi.string().required(),
    passwordNueva: Joi.string().required(),
    confirmarPasswordNueva: Joi.string().required()
});
