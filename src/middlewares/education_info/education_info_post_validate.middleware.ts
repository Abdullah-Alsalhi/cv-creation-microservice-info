import { body, ValidationChain } from "express-validator";

export const education_info_post_validation: ValidationChain[] = [
	body("institution_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/)
		.isLength({ max: 52 })
		.withMessage("institution_name is requried and its max length is : 52"),
	body("degree")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+$/)
		.isLength({ max: 52 })
		.withMessage("degree is required and its max length is : 16"),
	body("field_of_study")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/)
		.isLength({ max: 255 })
		.withMessage("field_of_study is required and its max length is : 255"),
	body("end_date")
		.trim()
		.toLowerCase()
		.matches(/[0-9]+/)
		.withMessage("Enter valid year for example: 2023")
		.optional({ nullable: true }),
];
