/* import { Request, Response } from "express";

import { PersonalInfo, PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
export const getSinglePersonInfo = async (req: Request, res: Response) => {
	if (req.user) {
		const user_id = req.user["user_id"];
		const id = +req.params.id;
		try {
			const USER_INFO: PersonalInfo =
				await prisma.personalInfo.findUniqueOrThrow({
					where: {
						id,
					},
					include: {
						urls: true,
					},
				});
			if (USER_INFO?.id === id && USER_INFO?.user_id === user_id) {
				return res.status(200).json(USER_INFO);
			} else {
				return res
					.status(404)
					.json({ msg: `You don't own this resource: ${id}` });
			}
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return res.status(400).json(error.meta);
				}
				return res.status(500).json({ msg: error.name });
			}
			return res.status(500).json({ msg: "server issue" });
		}
	}
};
 */
