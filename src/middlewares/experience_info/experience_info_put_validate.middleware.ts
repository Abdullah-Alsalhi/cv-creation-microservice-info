import { body, ValidationChain } from "express-validator";

export const experience_info_put_validation: ValidationChain[] = [
	body("company_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/)
		.isLength({ max: 255 })
		.withMessage("company_name is requried and its max length is : 255")
		.optional({ nullable: true }),
	body("job_title")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-z]+( [a-z]+)?$/)
		.isLength({ max: 255 })
		.withMessage("job_title is requried and its max length is : 255")
		.optional({ nullable: true }),
	body("description")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-zA-Z0-9 .,'-]*$/)
		.isLength({ max: 255 })
		.withMessage("description is requried and its max length is : 255")
		.optional({ nullable: true }),

	body("start_date")
		.trim()
		.notEmpty()
		.withMessage("start_date is required.")
		.matches(/^\d{4}-\d{2}$/)
		.withMessage("start_date must be in YYYY-MM format.")
		.optional({ nullable: true }),
	body("end_date")
		.trim()
		.notEmpty()
		.withMessage("end_date is required.")
		.matches(/^\d{4}-\d{2}$/)
		.withMessage("end_date must be in YYYY-MM format.")
		.optional({ nullable: true }),

	body("location")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[a-zA-Z0-9 .,'-]*$/)
		.isLength({ max: 128 })
		.withMessage("location is requried and its max length is : 128 letters")
		.optional({ nullable: true }),
];
