import { Router, Request, Response } from "express";
import { UserController } from "../controllers/auth/AuthController";
export const userAuth = Router();

const userRegister = new UserController;

userAuth
    .route('/user')
    .post((req: Request, res: Response) => userRegister.create(req, res));