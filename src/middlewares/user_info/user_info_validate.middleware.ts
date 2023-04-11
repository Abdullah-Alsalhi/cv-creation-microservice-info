import { body, ValidationChain } from "express-validator";

export const user_info_validation: ValidationChain[] = [
	body("first_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+$/)
		.withMessage("first_name is requried"),
	body("last_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+$/)
		.withMessage("last_name is required"),
	body("country")
		.trim()
		.toLowerCase()
		.matches(/^[a-z]+ ?[a-z]+? ?[a-z]+? ?[a-z]+?$/)
		.withMessage("Enter valid country")
		.optional({ nullable: true }),
	body("city")
		.trim()
		.toLowerCase()
		.matches(/^[a-z]+ ?[a-z]+?$/)
		.withMessage("Enter valid city")
		.optional({ nullable: true }),
	// todo: prevent xss
	body("bio")
		.trim()
		.notEmpty()
		.toLowerCase()
		.isLength({ max: 255 })
		.withMessage("bio can be only less than  or equal to 255 letters")
		.optional({ nullable: true }),
];
