
import Joi from 'joi';

export const schemaCrearEjercicio = Joi.object({
    codigo: Joi.string().required(),
    nombre_entrenamiento: Joi.string().required(),
    objetivo: Joi.string().required(),
    link_video_entrenamiento: Joi.string().required(),
    cantidad_series: Joi.number().required(),
    detalles_entrenamiento: Joi.string().required(),

    imagen_entrenamiento: Joi.string().base64().required(),
    informacion_adicional: Joi.string().allow(''),
    extension: Joi.string().required(),
});

export const schemaActualizarEjercicio = Joi.object({

    cambia_logo: Joi.boolean().required(),
    imagen: Joi.when('cambia_logo', { is: true, then: Joi.string().base64().required() }),
    extension: Joi.when('cambia_logo', { is: true, then: Joi.string().required() }),
});

