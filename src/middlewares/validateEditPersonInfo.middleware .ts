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
				personalInfo: {
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					phone: req.body.phone,
					country: req.body.country,
					city: req.body.city,
					brief_description: req.body.brief_description,
					user_id: user_id,
				},
				mediaUrl: {
					urls: {
						personal: req.body.urls.personal,
						linkedin: req.body.urls.linkedin,
						github: req.body.urls.github,
					},
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
