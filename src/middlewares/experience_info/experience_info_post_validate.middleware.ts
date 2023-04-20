import { body, ValidationChain } from "express-validator";

export const experience_info_post_validation: ValidationChain[] = [
	body("company_name")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.isLength({ max: 255 })
		.withMessage("company_name is requried and its max length is : 255"),
	body("job_title")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.isLength({ max: 255 })
		.withMessage("job_title is requried and its max length is : 255"),
	body("description")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.isLength({ max: 255 })
		.withMessage("description is requried and its max length is : 255"),

	body("start_date")
		.trim()
		.notEmpty()
		.withMessage("start_date is required.")
		.matches(/^\d{4}-\d{2}$/)
		.withMessage("start_date must be in YYYY-MM format."),
	body("end_date")
		.trim()
		.notEmpty()
		.withMessage("end_date is required.")
		.matches(/^\d{4}-\d{2}$/)
		.withMessage("end_date must be in YYYY-MM format."),

	body("location")
		.trim()
		.notEmpty()
		.toLowerCase()
		.matches(/^[^<>&]*$/)
		.isLength({ max: 128 })
		.withMessage("location is requried and its max length is : 128 letters"),
];
