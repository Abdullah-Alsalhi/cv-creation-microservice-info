import { Router, Request, Response } from "express";
import { UserController } from "../controllers/auth/AuthController";
import { validateRegistrationForm } from "../middlewares/userRegistrationForm.middleware";
import { validateRegistrationFormMiddleware } from "../middlewares/validateRegistrationForm.middleware";
export const userAuth = Router();

const userRegister = new UserController;

userAuth
    .route('/user/register')
    .post(validateRegistrationForm, validateRegistrationFormMiddleware, (req: Request, res: Response) => userRegister.register(req, res));

userAuth
    .route('/user/login')
    .post(validateRegistrationForm, validateRegistrationFormMiddleware, (req: Request, res: Response) => userRegister.login(req, res));