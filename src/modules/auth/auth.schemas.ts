
import Joi from 'joi';

export const schemaLogin = Joi.object({
    password: Joi.string().empty().required(),
    correo: Joi.string().email().required(),

});


