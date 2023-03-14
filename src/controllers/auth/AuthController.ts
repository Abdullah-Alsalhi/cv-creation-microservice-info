import { PrismaClient } from '@prisma/client'
import { Request, response, Response } from 'express'
import { BaseController } from '../BaseController'
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export class UserController extends BaseController {

    static async hash_password(password: string) {
        const saltRounds: number = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    static async compare_password(password: string, hashStored: string): Promise<any> {
        try {
            const result = await bcrypt.compare(password, hashStored);
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
        }

    }

    public async register(req: Request, res: Response) {

        async function main() {

            const is_registerd = await prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            });

            if (!is_registerd) {
                const hashed_password: string = await UserController.hash_password(req.body.password);
                try {
                    const user = await prisma.user.create({
                        data: {
                            email: req.body.email,
                            password: hashed_password,
                        },
                    })
                    const secret_key = 'secret';
                    const { id } = user;
                    const token = jwt.sign({ id }, secret_key)
                    user["access_token"] = token;
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

    public async login(req: Request, res: Response) {

        async function main() {

            const user = await prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            });

            if (user) {
                const isMatch: boolean = await UserController.compare_password(req.body.password, user.password);
                if (isMatch) {
                    const secret_key = 'secret';
                    const { id } = user;
                    const token = jwt.sign({ id }, secret_key)
                    user["access_token"] = token;
                    return res.status(201).json(user)
                }
            }

            return res.status(403).json(user);
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