import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { BaseController } from '../BaseController'
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export class UserController extends BaseController {



    static async hash_password(password: string) {
        const saltRounds: number = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    public async create(req: Request, res: Response) {

        async function main() {

            const is_registerd = await prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            });

            if (!is_registerd) {
                const hashed_password = await this.hash_password(req.body.password);
                try {
                    const user = await prisma.user.create({
                        data: {
                            email: req.body.email,
                            password: hashed_password,
                        },
                    })
                    console.log(user)
                    return res.status(201).json(user)

                } catch (error) {
                    console.log(error)
                }
            }

            return res.status(403).json({ "message": "User already registered" });
        }

        main()
            .then(async () => {
                await prisma.$disconnect()
            })
            .catch(async (e) => {
                console.error(e)
                await prisma.$disconnect()
                process.exit(1)
            })
    }
}