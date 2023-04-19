import { body, ValidationChain } from "express-validator";

export const skill_info_put_validation: ValidationChain[] = [
	body("name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/)
		.isLength({ max: 32 })
		.withMessage("company_name is requried and its max length is : 32")
		.optional({ nullable: true }),
];
