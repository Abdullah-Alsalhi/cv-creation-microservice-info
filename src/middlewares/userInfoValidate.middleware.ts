import { body, ValidationChain } from "express-validator";

export const userInfoValidation: ValidationChain[] = [
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
	body("country")
		.optional()
		.trim()
		.toLowerCase()
		.matches(/^[a-z]+ ?[a-z]+? ?[a-z]+? ?[a-z]+?$/)
		.withMessage("Enter valid country"),
	body("city")
		.optional()
		.trim()
		.toLowerCase()
		.matches(/^[a-z]+ ?[a-z]+?$/)
		.withMessage("Enter valid city"),
	// todo: prevent xss
	body("brief_description")
		.optional()
		.trim()
		.toLowerCase()
		.isLength({ max: 255 })
		.withMessage("description can be only less than  or equal to 255 letters"),
	body("urls.personal")
		.optional()
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal website url"),
	body("urls.linkedin")
		.optional()
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal linkedin account url"),
	body("urls.github")
		.optional()
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal linkedin account url"),
];
