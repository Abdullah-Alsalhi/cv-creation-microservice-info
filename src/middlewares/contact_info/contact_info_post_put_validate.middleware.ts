import { body, ValidationChain } from "express-validator";

export const contact_info_post_put_validation: ValidationChain[] = [
	body("email")
		.trim()
		.isEmail()
		.toLowerCase()
		.withMessage("Enter a valid email"),
	body("phone")
		.trim()
		.notEmpty()
		.matches(/^[0-9]+$/)
		.isLength({ min: 10, max: 10 })
		.withMessage("Enter a 10 digits phone number"),
];
