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
        const objErr = {};
        err["errors"].map((e: { param: string }) => objErr[e["param"]] = e["msg"]);
        // console.log(objErr);
        return res.status(422).json({ message: message, errors: objErr });
    }
}