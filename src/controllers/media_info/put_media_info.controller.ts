import { Request, Response } from "express";

import { PrismaClient, Prisma, MediaInfo } from "@prisma/client";

const prisma = new PrismaClient();

export const media_info_put_controller = async (
	req: Request,
	res: Response
) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];
		try {
			const media_info_found: MediaInfo =
				await prisma.mediaInfo.findFirstOrThrow({
					where: {
						id,
					},
				});
			if (media_info_found?.user_id !== user_id) {
				console.log("yes");
				return res
					.status(403)
					.json({ msg: `you don't own this resource ${id}` });
			} else {
				const media_info_updated: MediaInfo = await prisma.mediaInfo.update({
					data: req.body,
					where: {
						id,
					},
				});
				return res.status(200).json(media_info_updated);
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
			return res.status(500).json({ msg: error });
		}
	}
};
