import { Request, Response, Router } from "express";

export const user_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";
import { user_info_validation } from "../../middlewares/user_info/user_info_validate.middleware";
import { user_info_validated_fields } from "../../middlewares/user_info/user_info_validated_fields.middleware";
passport.use(JWTcheck);

user_info_route
	.route("/info")
	.post(
		authenticateJWTtoken,
		user_info_validation,
		user_info_validated_fields,
		(req: Request, res: Response) => {
			return res.json(req.body);
		}
	);
