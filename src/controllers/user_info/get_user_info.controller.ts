import { Request, Response } from "express";

import { PrismaClient, Prisma, userInfo } from "@prisma/client";

const prisma = new PrismaClient();

export const user_info_get_controller = async (req: Request, res: Response) => {
	if (req.user && req.params) {
		const user_id = req.user["user_id"];
		try {
			const media_info_found: userInfo = await prisma.userInfo.findFirstOrThrow(
				{
					where: {
						user_id,
					},
				}
			);
			return res.status(200).json(media_info_found);
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
