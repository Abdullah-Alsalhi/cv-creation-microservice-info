import { Request, Response } from "express";

import { PrismaClient, Prisma, experience } from "@prisma/client";

const prisma = new PrismaClient();

export const experience_info_get_single_controller = async (
	req: Request,
	res: Response
) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];
		try {
			const experience_info_found: experience =
				await prisma.experience.findUniqueOrThrow({
					where: {
						id,
					},
				});
			if (experience_info_found?.user_id !== user_id) {
				return res
					.status(403)
					.json({ msg: `you don't own this resource ${id}` });
			}
			return res.status(200).json(experience_info_found);
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
			}
			if (error.name === "NotFoundError") {
				return res.status(404).json({ msg: "no data" });
			}
			return res.status(500).json({ msg: error });
		}
	}
};
