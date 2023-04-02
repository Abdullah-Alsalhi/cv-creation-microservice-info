import { Request, Response } from "express";

import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const updatePersonInfo = async (req: Request, res: Response) => {
	if (req.user && req.params) {
		const id = +req.params.id;
		try {
			const UPDATE_USER_INFO: PersonalInfo = await prisma.personalInfo.update({
				where: { id },
				data: req.body,
			});
			if (UPDATE_USER_INFO) {
				return res.status(200).json(UPDATE_USER_INFO);
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
