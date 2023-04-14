import { Request, Response } from "express";

import { PrismaClient, Prisma, contactInfo } from "@prisma/client";

const prisma = new PrismaClient();

export const contact_info_put_controller = async (
	req: Request,
	res: Response
) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];
		try {
			const contact_info_found: contactInfo =
				await prisma.contactInfo.findFirstOrThrow({
					where: {
						id,
					},
				});
			if (contact_info_found?.user_id !== user_id) {
				console.log("yes");
				return res
					.status(403)
					.json({ msg: `you don't own this resource ${id}` });
			} else {
				const contact_info_updated: contactInfo =
					await prisma.contactInfo.update({
						data: req.body,
						where: {
							id,
						},
					});
				return res.status(200).json(contact_info_updated);
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
