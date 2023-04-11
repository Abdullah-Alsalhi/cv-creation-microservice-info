/* import { Request, Response } from "express";

import { PersonalInfo, MediaUrl, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const updatePersonInfo = async (req: Request, res: Response) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		const user_id = req.user["user_id"];
		// todo: Partial Patch
		try {
			const INFO_FOUND = await prisma.personalInfo.findFirst({
				where: { id },
			});
			if (INFO_FOUND?.user_id === user_id && INFO_FOUND?.id === id) {
				const UPDATED_VALUES = await prisma.$transaction(async (prisma) => {
					const PERSOANL_INFO_UPDATE = await prisma.personalInfo.update({
						where: {
							id,
						},
						data: req.body.personalInfo,
					});

					const MEDIA_URL_UPDATE = await prisma.mediaUrl.update({
						where: {
							info_id: id,
						},
						data: req.body.mediaUrl.urls,
					});

					return { PERSOANL_INFO_UPDATE, MEDIA_URL_UPDATE };
				});

				return res.status(201).json(UPDATED_VALUES);
			} else {
				return res
					.status(404)
					.json({ msg: `You don't own this resource ${id}` });
			}
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
			}
		}
	}
};
 */
