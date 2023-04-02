import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateEditPersonInfo = (
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
				email: req.body.email,
				phone: req.body.phone,
				country: req.body.country || "0",
				city: req.body.city || "0",
				brief_description: req.body.brief_description || "0",
				user_id: user_id,
				urls: {
					personal: req.body.urls.personal || "0",
					linkedin: req.body.urls.linkedin || "0",
					github: req.body.urls.github || "0",
				},
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
