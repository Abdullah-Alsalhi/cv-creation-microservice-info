import { Request, Response, NextFunction } from "express";
import { validationResult } from 'express-validator';

export const validateRegistrationFormMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw (errors);
        }
        next();
    } catch (err) {
        const message: string = "The given data was not valid";
        const errors: string[] = err["errors"]
        return res.status(422).json({ message: message, errors: errors });
    }
}