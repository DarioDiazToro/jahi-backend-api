
import Joi from 'joi';

export const schemaCrearEjercicio = Joi.object({

    nombre: Joi.string().required(),

});

export const schemaActualizarEjercicio = Joi.object({


});

