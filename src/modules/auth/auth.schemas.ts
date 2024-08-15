
import Joi from 'joi';

export const schemaLogin = Joi.object({
    password: Joi.string().empty().required(),
    email: Joi.string().email().required(),

});


