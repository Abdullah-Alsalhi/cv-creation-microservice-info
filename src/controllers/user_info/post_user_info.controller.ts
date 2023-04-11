//todo : controller for user_info it should be done today

import { Request, Response } from "express";

import { PrismaClient, userInfo, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const user_info_post_controller = async (
	req: Request,
	res: Response
) => {
	try {
		const user_info_created: userInfo = await prisma.userInfo.create({
			data: req.body,
		});
		return res.status(201).json(user_info_created);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				return res.status(400).json(error.meta);
			}
		}
		return res.status(500).json({ msg: "server issue" });
	}
};
