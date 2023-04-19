import { Router } from "express";

export const skill_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";

import { skill_info_get_many_controller } from "../../controllers/skill_info/get_many_skill_info.controller";
import { skill_info_post_controller } from "../../controllers/skill_info/post_skill_info.controller";
import { skill_info_put_controller } from "../../controllers/skill_info/put_skill_info.controller";

import { skill_info_post_validation } from "../../middlewares/skill_info/skill_info_post_validate.middleware";
import { skill_info_validated_fields } from "../../middlewares/skill_info/skill_info_validated_fields.middleware";
import { skill_info_put_validation } from "../../middlewares/skill_info/skill_info_put_validate.middleware";
import { skill_info_get_single_controller } from "../../controllers/skill_info/get_single_skill_info.controller";

passport.use(JWTcheck);
skill_info_route
	.route("/skill")
	.get(authenticateJWTtoken, skill_info_get_many_controller)
	.post(
		authenticateJWTtoken,
		skill_info_post_validation,
		skill_info_validated_fields,
		skill_info_post_controller
	);

skill_info_route
	.route("/skill/:id")
	.get(authenticateJWTtoken, skill_info_get_single_controller)
	// todo: delete route to delete skill
	.put(
		authenticateJWTtoken,
		skill_info_put_validation,
		skill_info_validated_fields,
		skill_info_put_controller
	);
