import { body, ValidationChain } from "express-validator";

export const project_info_post_validation: ValidationChain[] = [
	body("name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.isLength({ max: 255 })
		.withMessage("company_name is requried and its max length is : 255"),

	body("description")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.isLength({ max: 255 })
		.withMessage("description is requried and its max length is : 255"),
];
