import express, {Response, Request, NextFunction} from "express"
import jwt from "jsonwebtoken";


const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export const isAuth = (req: Request, res: Response, next:NextFunction):any=>{

    const token = req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(401).json({error:"Access denied"})
    
    try{
        const decodifiedToken= jwt.verify(token, TOKEN_PASSWORD)
        req.body.user = decodifiedToken
        next()
    } catch (error){
        res.status(401).json({error:"Invalid token"})
    }
    

}