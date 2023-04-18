//todo : controller for experience_info it should be done today

import { Request, Response } from "express";

import { PrismaClient, experience, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const experience_info_post_controller = async (
	req: Request,
	res: Response
) => {
	try {
		const experience_info_created: experience = await prisma.experience.create({
			data: req.body,
		});
		return res.status(201).json(experience_info_created);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				return res.status(400).json(error.meta);
			}
		}
		return res.status(500).json({ msg: "server issue" });
	}
};
