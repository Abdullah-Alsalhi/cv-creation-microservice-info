import { Request, Response } from "express";

import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getPersonInfo = async (req: Request, res: Response) => {
	if (req.user) {
		const user_id = req.user["user_id"];
		try {
			const USER_INFO: PersonalInfo =
				await prisma.personalInfo.findFirstOrThrow({
					where: {
						user_id: user_id,
					},
					include: {
						urls: true,
					},
				});
			if (USER_INFO) {
				return res.status(200).json(USER_INFO);
			} else {
				return res.status(404).json({ msg: "user info not found" });
			}
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
			}
			return res.status(500).json({ msg: "server issue" });
		}
	}
};
