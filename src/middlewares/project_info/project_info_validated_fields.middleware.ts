import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const project_info_validated_fields = (
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
			req.body["user_id"] = user_id;
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
