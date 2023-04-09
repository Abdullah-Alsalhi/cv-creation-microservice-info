import { Router } from "express";

import { postPersonInfo } from "../controllers/postPersonInfo.controller";
export const personInfoRoute = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../middlewares/checkUserJWT.middleware";

import { validatePersonInfo } from "../middlewares/validatePersonInfo.middleware";
import { validateEditPersonInfo } from "../middlewares/validateEditPersonInfo.middleware ";

import { userInfoValidation } from "../middlewares/userInfoValidate.middleware";
import { getPersonInfo } from "../controllers/getPersonInfo.controller";
import { updatePersonInfo } from "../controllers/editPersonalInfo.contrller";
import { deletPersonInfo } from "../controllers/deletePersonalInfo.controller";
passport.use(JWTcheck);
personInfoRoute
	.route("/")
	.post(
		authenticateJWTtoken,
		userInfoValidation,
		validatePersonInfo,
		postPersonInfo
	)
	.get(authenticateJWTtoken, getPersonInfo);

personInfoRoute
	.route("/:id")
	.put(
		authenticateJWTtoken,
		userInfoValidation,
		validateEditPersonInfo,
		updatePersonInfo
	)
	.delete(authenticateJWTtoken, deletPersonInfo);
