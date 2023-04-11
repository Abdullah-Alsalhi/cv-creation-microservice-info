/* import { Request, Response } from "express";

import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const deletPersonInfo = async (req: Request, res: Response) => {
	if (req.user) {
		const user_id = req.user["user_id"];
		const id = +req.params.id;
		try {
			const INFO_FOUND = await prisma.personalInfo.findFirstOrThrow({
				where: { id },
			});

			if (INFO_FOUND?.user_id === user_id && INFO_FOUND?.id === id) {
				const USER_INFO: PersonalInfo = await prisma.personalInfo.delete({
					where: {
						id,
					},
					include: {
						urls: true,
					},
				});
				if (USER_INFO) {
					return res.status(200).json(USER_INFO);
				}
			}
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
			}
			return res.status(404).json({ msg: `no data for id: ${id}` });
		}
	}
};
 */
