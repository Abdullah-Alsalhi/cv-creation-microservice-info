import { Request, Response } from "express";

import { PrismaClient, project, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const project_info_put_controller = async (
	req: Request,
	res: Response
) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];

		try {
			const project_info_found: project = await prisma.project.findFirstOrThrow(
				{
					where: {
						id,
					},
				}
			);

			if (project_info_found?.user_id !== user_id) {
				return res
					.status(403)
					.json({ msg: `you don't own this resource ${id}` });
			} else {
				const project_info_updated: project = await prisma.project.update({
					data: req.body,
					where: {
						id,
					},
				});
				return res.status(200).json(project_info_updated);
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
