import { body, ValidationChain } from "express-validator";

export const user_info_put_validation: ValidationChain[] = [
	body("first_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+$/)
		.isLength({ max: 16 })
		.optional({ nullable: true })
		.withMessage("first_name is requried and its max length is : 16"),
	body("last_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+$/)
		.isLength({ max: 16 })
		.optional({ nullable: true })
		.withMessage("last_name is required and its max length is : 16"),
	body("country")
		.trim()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.withMessage("Enter valid country")
		.optional({ nullable: true }),
	body("city")
		.trim()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.withMessage("Enter valid city")
		.optional({ nullable: true }),
	body("bio")
		.trim()
		.notEmpty()
		.matches(/^[^<>&]*$/)
		.toLowerCase()
		.isLength({ max: 255 })
		.withMessage("bio can be only less than  or equal to 255 letters")
		.optional({ nullable: true }),
];
