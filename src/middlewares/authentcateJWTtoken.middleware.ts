import passport from "passport";

export const authenticateJWTtoken = passport.authenticate("jwt", {
	session: false,
});
