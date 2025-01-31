import { Router } from "express";
import { UserController } from "@/controllers/user.controller";
import { isAuth } from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/isAdmin.middleware";



const router = Router()
router.get('/profile', isAuth , UserController.profile)
//router.get('/', isAuthenticate , UserController.profile)
//GET localhot:3000/api/users/
router.get('/', isAuth, isAdmin , UserController.getAllProfiles)

export default router