import { Router } from "express";

export const experience_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";

import { experience_info_get_many_controller } from "../../controllers/experience_info/get_many_experience_info.controller";
import { experience_info_post_controller } from "../../controllers/experience_info/post_experience_info.controller";
import { experience_info_put_controller } from "../../controllers/experience_info/put_experience_info.controller";

import { experience_info_post_validation } from "../../middlewares/experience_info/experience_info_post_validate.middleware";
import { experience_info_validated_fields } from "../../middlewares/experience_info/experience_info_validated_fields.middleware";
import { experience_info_put_validation } from "../../middlewares/experience_info/experience_info_put_validate.middleware";
import { experience_info_get_single_controller } from "../../controllers/experience_info/get_single_experience_info.controller";

passport.use(JWTcheck);
experience_info_route
	.route("/xp")
	.get(authenticateJWTtoken, experience_info_get_many_controller)
	.post(
		authenticateJWTtoken,
		experience_info_post_validation,
		experience_info_validated_fields,
		experience_info_post_controller
	);

experience_info_route
	.route("/xp/:id")
	.get(authenticateJWTtoken, experience_info_get_single_controller)
	.put(
		authenticateJWTtoken,
		experience_info_put_validation,
		experience_info_validated_fields,
		experience_info_put_controller
	);
