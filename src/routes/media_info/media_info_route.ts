import { Router } from "express";

export const media_info_route = Router();

import passport from "passport";
import { authenticateJWTtoken } from "../../middlewares/authentcateJWTtoken.middleware";
import { JWTcheck } from "../../middlewares/checkUserJWT.middleware";

passport.use(JWTcheck);

// media_info_route;
