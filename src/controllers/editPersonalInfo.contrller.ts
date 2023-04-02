import { Request, Response } from "express";

import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const updatePersonInfo = async (req: Request, res: Response) => {
	if (req.user && req.params) {
		const id = +req.params.id;

		// todo: check if the info exist or throw error else update the value including urls
		const INFO_FOUND = await prisma.personalInfo.findFirst();
	}
};
