import { Request, Response } from "express";

import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const deletPersonInfo = async (req: Request, res: Response) => {
	//NOTE: I used user_id to delete the data belongs to it which is indexed in the database
	if (req.user) {
		const user_id = req.user["user_id"];
		try {
			const USER_INFO: PersonalInfo = await prisma.personalInfo.delete({
				where: {
					user_id: user_id,
				},
				include: {
					urls: true,
				},
			});
			if (USER_INFO) {
				return res.status(200).json(USER_INFO);
			}
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
			}
			return res.status(404).json({ msg: "no data belongs to this user" });
		}
	}
};
