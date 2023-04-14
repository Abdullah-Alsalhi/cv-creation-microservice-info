import { Router } from "express";

export const contact_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";

import { contact_info_post_put_validation } from "../../middlewares/contact_info/contact_info_post_put_validate.middleware";
import { contact_info_validated_fields } from "../../middlewares/contact_info/contact_info_validated_fields.middleware";

import { contact_info_post_controller } from "../../controllers/contact_info/post_contact_info.controller";
import { contact_info_get_controller } from "../../controllers/contact_info/get_contact_info.controller";
import { contact_info_put_controller } from "../../controllers/contact_info/put_contact_info.controller";
passport.use(JWTcheck);

contact_info_route
	.route("/contact")
	.get(authenticateJWTtoken, contact_info_get_controller)
	.post(
		authenticateJWTtoken,
		contact_info_post_put_validation,
		contact_info_validated_fields,
		contact_info_post_controller
	);

contact_info_route
	.route("/contact/:id")
	.put(
		authenticateJWTtoken,
		contact_info_post_put_validation,
		contact_info_validated_fields,
		contact_info_put_controller
	);
