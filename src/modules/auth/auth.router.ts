
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { login } from "./auth.controller";
import { schemaLogin } from "./auth.schemas";



const router = Router();


router.post("/login", [joiValidateMiddleware(schemaLogin)], login)


export default router;