import { Request, Response } from "express";

import { PersonalInfo, MediaUrl, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const updatePersonInfo = async (req: Request, res: Response) => {
	if (req.user && req.params) {
		const id = +req.params.id;

		// todo: Partial Patch
		try {
			const INFO_FOUND = await prisma.personalInfo.count({
				where: { id },
			});

			if (INFO_FOUND) {
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
					.json({ msg: `no data stored for this id: ${id}` });
			}
		} catch (error) {
			console.log(error);
		}
	}
};
