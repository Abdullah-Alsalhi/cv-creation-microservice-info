import { Router, Request, Response } from "express";
import { UserController } from "../controllers/auth/AuthController";
import { validateRegistrationForm } from "../middlewares/userRegistrationForm.middleware";
import { validateRegistrationFormMiddleware } from "../middlewares/validateRegistrationForm.middleware";
export const userAuth = Router();

const userRegister = new UserController;

userAuth
    .route('/user')
    .post(validateRegistrationForm, validateRegistrationFormMiddleware, (req: Request, res: Response) => userRegister.create(req, res));