import { body, ValidationChain } from "express-validator";

export const media_info_post_put_validation: ValidationChain[] = [
	body("personal")
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal website url")
		.optional({ nullable: true }),
	body("linkedin")
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal linkedin account url")
		.optional({ nullable: true }),
	body("github")
		.trim()
		.matches(
			/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i
		)
		.withMessage("personal github account url")
		.optional({ nullable: true }),
];
