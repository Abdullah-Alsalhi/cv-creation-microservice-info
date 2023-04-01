import dotenv from "dotenv";
dotenv.config();
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey:
		"django-insecure-@2$^5rgjloiy%f-l&1+9i6+#qhmw!*bmqi21zsodmd8-fmh_31",
};

export const JWTcheck = new Strategy(
	options,
	async (payload: any, done: VerifiedCallback) => {
		try {
			// If the token is valid, return the payload
			return done(null, payload);
		} catch (err) {
			return done(err, false);
		}
	}
);
