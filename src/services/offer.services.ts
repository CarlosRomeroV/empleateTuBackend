import { Prisma, PrismaClient, User } from "@prisma/client";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


const prisma = new PrismaClient()
const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

export class OfferService{


    static async getUserByEmail(email:string){     
        const foundUser = await prisma.user.findUnique(
            {
            where: {email},
            omit: {password:true}
            })
        if (!foundUser) throw new Error('User not found')
        return foundUser
    }

    static async getUserById(id:number){     
        const foundUser = await prisma.user.findUnique(
            {
            where: {id},
            omit: {password:true}
            })
        if (!foundUser) throw new Error('User not found')
        return foundUser
    }

    static async getAll(){
        const users = await prisma.user.findMany({
            omit: {password:true}
        })
        return users
    }

    
}