import { AuthService } from "../services/auth.services";
import { UserService } from "../services/user.services";
import { PrismaClient } from "@prisma/client";
import express, {Response, Request, response} from "express"

export class UserController{


    static async profile(req: Request, res: Response){
            const email =  req.body.user.email
            const id = req.body.user.id
            const user = await UserService.getUserById(id)
            res.status(200).json(user)
    }

    static async getAllProfiles(req: Request, res: Response){
        try{
            const user = await UserService.getAll()
            res.status(200).json(user)
        } catch(e){
            res.status(409).json({message:'Error'})
        }
}

    


}
