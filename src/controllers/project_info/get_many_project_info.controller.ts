import { Request, Response } from "express";

import { PrismaClient, Prisma, project } from "@prisma/client";

const prisma = new PrismaClient();

export const project_info_get_many_controller = async (
	req: Request,
	res: Response
) => {
	if (req.user && req.params) {
		const user_id = req.user["user_id"];
		try {
			const project_info_found = await prisma.project.findMany({
				where: {
					user_id,
				},
			});
			return res.status(200).json(project_info_found);
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
