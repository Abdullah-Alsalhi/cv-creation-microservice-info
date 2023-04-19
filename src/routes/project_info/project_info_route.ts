import { Router } from "express";

export const project_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";

import { project_info_get_many_controller } from "../../controllers/project_info/get_many_project_info.controller";
import { project_info_post_controller } from "../../controllers/project_info/post_project_info.controller";
import { project_info_put_controller } from "../../controllers/project_info/put_project_info.controller";

import { project_info_post_validation } from "../../middlewares/project_info/project_info_post_validate.middleware";
import { project_info_validated_fields } from "../../middlewares/project_info/project_info_validated_fields.middleware";
import { project_info_put_validation } from "../../middlewares/project_info/project_info_put_validate.middleware";
import { project_info_get_single_controller } from "../../controllers/project_info/get_single_project_info.controller";

passport.use(JWTcheck);
project_info_route
	.route("/project")
	.get(authenticateJWTtoken, project_info_get_many_controller)
	.post(
		authenticateJWTtoken,
		project_info_post_validation,
		project_info_validated_fields,
		project_info_post_controller
	);

project_info_route
	.route("/project/:id")
	.get(authenticateJWTtoken, project_info_get_single_controller)
	.put(
		authenticateJWTtoken,
		project_info_put_validation,
		project_info_validated_fields,
		project_info_put_controller
	);
