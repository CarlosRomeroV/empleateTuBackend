import { AuthService } from "../services/auth.services";
import { UserService } from "../services/user.services";
import { PrismaClient } from "@prisma/client";
import express, {Response, Request, response} from "express"

export class AuthController{
     static async login(req: Request, res: Response){
        

        try{
            const userData = req.body
            console.log("user data: "+userData)
            const token= await AuthService.login(userData.email, userData.password)
            res.cookie('token', token, {
                maxAge: 60*60*1000, //1 hora de caducidad
                httpOnly: true, //no se puede acceder mediante js
                secure: false, //si está en true solo se encia si usas https
                sameSite: 'strict' //evita ataques CSRF
            })
            res.status(201).json({message:'Log in successfully', token})
        } catch (error) {
            res.status(409).json({message:'Log in failed'})
        }
    }
    
    static async register(req: Request, res: Response){
        try{
            const userData = req.body
            console.log(userData)
            const newUser= await AuthService.register(userData)
            console.log("registrado")
            res.status(201).json({message:'User register successfully', newUser})
            
        } catch (error) {
            res.status(409).json({message:'User register failed'})
        }
    }



    


}
