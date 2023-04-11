import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const user_info_validated_fields = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			throw errors;
		}
		if (req.user) {
			const user_id: number = req.user["user_id"];
			req.body = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				country: req.body.country,
				city: req.body.city,
				bio: req.body.bio,
				user_id: user_id,
			};
		}
		next();
	} catch (err) {
		const message: string = "The given data was not valid";
		const objErr = {};
		err["errors"].map(
			(e: { param: string }) => (objErr[e["param"]] = e["msg"])
		);
		// console.log(objErr);
		return res.status(422).json({ message: message, errors: objErr });
	}
};
