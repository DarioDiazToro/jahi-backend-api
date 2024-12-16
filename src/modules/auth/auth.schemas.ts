
import Joi from 'joi';

export const schemaLogin = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),

});


