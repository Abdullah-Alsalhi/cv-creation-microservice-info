import { Router } from "express";

export const media_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";
import { media_info_post_put_validation } from "../../middlewares/media_info/media_info_post_put_validate.middleware";
import { media_info_validated_fields } from "../../middlewares/media_info/media_info_validated_fields.middleware";
import { media_info_post_controller } from "../../controllers/media_info/post_media_info.controller";
import { media_info_put_controller } from "../../controllers/media_info/put_media_info.controller";
import { media_info_get_controller } from "../../controllers/media_info/get_media_info.controller";
passport.use(JWTcheck);

media_info_route
	.route("/media")
	.get(authenticateJWTtoken, media_info_get_controller)
	.post(
		authenticateJWTtoken,
		media_info_post_put_validation,
		media_info_validated_fields,
		media_info_post_controller
	);

media_info_route
	.route("/media/:id")
	.put(
		authenticateJWTtoken,
		media_info_post_put_validation,
		media_info_validated_fields,
		media_info_put_controller
	);
