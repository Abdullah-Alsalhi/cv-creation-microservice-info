import { Router } from "express";

import { personInfo } from "../controllers/personInfo.controller";
export const resourceRouter = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../middlewares/checkUserJWT.middleware";
import { validatePersonInfo } from "../middlewares/validatePersonInfo.middleware";
import { userInfoValidation } from "../middlewares/userInfoValidate.middleware";
import { getPersonInfo } from "../controllers/getPersonInfo.controller";

passport.use(JWTcheck);
resourceRouter
	.route("/")
	.post(
		authenticateJWTtoken,
		userInfoValidation,
		validatePersonInfo,
		personInfo
	)
	.get(authenticateJWTtoken, getPersonInfo);
