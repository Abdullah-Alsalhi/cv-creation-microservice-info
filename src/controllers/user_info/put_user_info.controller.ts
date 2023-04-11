import { Request, Response } from "express";

import { PrismaClient, userInfo, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const user_info_put_controller = async (req: Request, res: Response) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];

		try {
			const user_info_found = await prisma.userInfo.findFirstOrThrow({
				where: {
					id,
				},
			});

			if (user_info_found?.user_id !== user_id) {
				return res
					.status(403)
					.json({ msg: `you don't own this resource ${id}` });
			} else {
				const user_info_updated: userInfo = await prisma.userInfo.update({
					data: req.body,
					where: {
						id,
					},
				});
				return res.status(200).json(user_info_updated);
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
