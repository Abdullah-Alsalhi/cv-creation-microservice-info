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
	body("brief_description")
		.trim()
		.notEmpty()
		.toLowerCase()
		.isLength({ max: 255 })
		.withMessage("description can be only less than  or equal to 255 letters")
		.optional({ nullable: true }),
	body("urls.personal")
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal website url")
		.optional({ nullable: true }),
	body("urls.linkedin")
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal linkedin account url")
		.optional({ nullable: true }),
	body("urls.github")
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal github account url")
		.optional({ nullable: true }),
];
