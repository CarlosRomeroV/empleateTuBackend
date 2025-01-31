import { Prisma, PrismaClient, User } from "@prisma/client";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


const prisma = new PrismaClient()
const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

export class AuthService{

    static async register(user: User) {
        // ver si el usuario ya existe
        // select id, name from user where email=user.email
        
        const findUser = await prisma.user.findUnique({
            where:{     email: user.email       }
        })
        
        if (findUser) throw new Error(`Email ${user.email} is already on use`)
    

        // encriptar la contraseña
        const encryptedPassword = await bcrypt.hash(user.password, 10)
        
       

        

        // guardar el usuario en la base de datos
        return await prisma.user.create({
            data:{
                ...user,
                role:null,
                password: encryptedPassword
            },
            omit:{
                password:true
            }
        })
        
    }

    static async login(email:string, password:string){
        // ver si el usuario existe

        // ver si coincide la contraseña

        // generar token de autentificacion

        // devolver el token

        /*const query= `select id, email, role, password from user where email='${email}' and password='${password}'`
        const findUsers=await prisma.$queryRawUnsafe(query) as User[]
        const findUser = findUsers[0]*/

        const findUser = await prisma.user.findUnique({
            where:{     email: email       }
        })

            if (!findUser) throw new Error(`Password and user doesn't match`)
                console.log(findUser)

       const isPasswordCorrect = await bcrypt.compare(password, findUser.password)
       if(!isPasswordCorrect) throw new Error("Password and user doesn't match")
        
        const token = jwt.sign(
            {id:findUser.id},
             TOKEN_PASSWORD, 
             {expiresIn:'1h'}
            )

            return token
    }

    
}