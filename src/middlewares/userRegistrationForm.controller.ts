import { body, ValidationChain } from 'express-validator';


export const validateRegistrationForm: ValidationChain[] = [
    body('email').trim().isEmail().normalizeEmail().withMessage("Email is not in valid format"),
    body("password").notEmpty().trim().isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
];


