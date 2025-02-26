import { Request, Response } from 'express';
import { hashPassword } from '../services/password.service';
import prisma from '../models/User'

export const register = async(req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body

    try {
        
        const hashedPassword = await hashPassword(password)
        console.log(hashedPassword)

        const user = await prisma.create({ 
            data: {
                email,
                password: hashedPassword
            }    
        })
    } catch (error) {
        
    }
}