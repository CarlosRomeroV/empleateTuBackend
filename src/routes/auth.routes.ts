import { Router } from "express";
import { AuthController } from "@/controllers/auth.controller";
import { isAuth } from "@/middlewares/auth.middleware";



const router = Router()

// como es un puntero a una función, el propio post se encarga de mandar los datos
// q hacen falta a la función login y register
router.post('/login', AuthController.login)
//router.post('/logout', AuthController.logout)
router.post('/register', AuthController.register)

export default router