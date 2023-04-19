//todo : controller for skill_info it should be done today

import { Request, Response } from "express";

import { PrismaClient, skill, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const skill_info_post_controller = async (
	req: Request,
	res: Response
) => {
	try {
		const skill_info_created: skill = await prisma.skill.create({
			data: req.body,
		});
		return res.status(201).json(skill_info_created);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				return res.status(400).json(error.meta);
			}
		}
		return res.status(500).json({ msg: "server issue" });
	}
};
