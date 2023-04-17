import { body, ValidationChain } from "express-validator";

export const education_info_put_validation: ValidationChain[] = [
	body("institution_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/) // todo: regular expression to match univerities names
		.isLength({ max: 52 })
		.withMessage("institution_name is requried and its max length is : 52")
		.optional({ nullable: true }),
	body("degree")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+$/)
		.isLength({ max: 52 })
		.withMessage("degree is required and its max length is : 16")
		.optional({ nullable: true }),
	body("field_of_study")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/) // todo: regular expression to match univerities names
		.isLength({ max: 255 })
		.withMessage("field_of_study is required and its max length is : 255")
		.optional({ nullable: true }),
	body("end_date")
		.trim()
		.toLowerCase()
		.matches(/[0-9]+/)
		.withMessage("Enter valid year for example: 2023")
		.optional({ nullable: true }),
];
