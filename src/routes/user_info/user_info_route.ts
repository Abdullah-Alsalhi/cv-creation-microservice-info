import { Request, Response, Router } from "express";

export const user_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";
import { user_info_post_validation } from "../../middlewares/user_info/user_info_post_validate.middleware";
import { user_info_validated_fields } from "../../middlewares/user_info/user_info_validated_fields.middleware";
import { user_info_post_controller } from "../../controllers/user_info/post_user_info.controller";
import { user_info_put_controller } from "../../controllers/user_info/put_user_info.controller";
import { user_info_put_validation } from "../../middlewares/user_info/user_info_put_validate.middleware";
passport.use(JWTcheck);

user_info_route
	.route("/info")
	.post(
		authenticateJWTtoken,
		user_info_post_validation,
		user_info_validated_fields,
		user_info_post_controller
	);

user_info_route
	.route("/info/:id")
	.put(
		authenticateJWTtoken,
		user_info_put_validation,
		user_info_validated_fields,
		user_info_put_controller
	);
