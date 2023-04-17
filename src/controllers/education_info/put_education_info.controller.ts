import { Request, Response } from "express";

import { PrismaClient, education, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const education_info_put_controller = async (
	req: Request,
	res: Response
) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];

		try {
			const education_info_found: education =
				await prisma.education.findFirstOrThrow({
					where: {
						id,
					},
				});

			if (education_info_found?.user_id !== user_id) {
				return res
					.status(403)
					.json({ msg: `you don't own this resource ${id}` });
			} else {
				const education_info_updated: education = await prisma.education.update(
					{
						data: req.body,
						where: {
							id,
						},
					}
				);
				return res.status(200).json(education_info_updated);
			}
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
			}
			if (error.name === "NotFoundError") {
				return res.status(404).json({ msg: "no data" });
			}
		}
	}
};
