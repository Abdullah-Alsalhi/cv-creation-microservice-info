import { Router } from "express";

export const education_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";

import { education_info_get_controller } from "../../controllers/education_info/get_education_info.controller";
import { education_info_post_controller } from "../../controllers/education_info/post_education_info.controller";
import { education_info_put_controller } from "../../controllers/education_info/put_education_info.controller";

import { education_info_post_validation } from "../../middlewares/education_info/education_info_post_validate.middleware";
import { education_info_validated_fields } from "../../middlewares/education_info/education_info_validated_fields.middleware";
import { education_info_put_validation } from "../../middlewares/education_info/education_info_put_validate.middleware";

passport.use(JWTcheck);
education_info_route
	.route("/edu")
	.get(authenticateJWTtoken, education_info_get_controller)
	.post(
		authenticateJWTtoken,
		education_info_post_validation,
		education_info_validated_fields,
		education_info_post_controller
	);

education_info_route
	.route("/edu/:id")
	.put(
		authenticateJWTtoken,
		education_info_put_validation,
		education_info_validated_fields,
		education_info_put_controller
	);
