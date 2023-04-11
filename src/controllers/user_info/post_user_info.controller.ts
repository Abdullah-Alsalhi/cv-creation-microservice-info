//todo : controller for user_info it should be done today

import { Request, Response } from "express";

/* import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const postPersonInfo = async (req: Request, res: Response) => {
	try {
		const USER_INFO: PersonalInfo = await prisma.personalInfo.create({
			data: req.body,
		});
		return res.status(201).json(USER_INFO);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				return res.status(400).json(error.meta);
			}
		}
		return res.status(500).json({ msg: "server issue" });
	}
};
 */
