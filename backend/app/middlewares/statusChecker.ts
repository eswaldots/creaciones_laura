import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma: any = new PrismaClient();

export const statusChecker = async function (req: Request, res: Response, next: NextFunction) {
	const actualDate = new Date();

	const orders = await prisma.order.updateMany({
		where: {
			date : {
				lt: actualDate,
			},
			status: 'Pending'
		},
		data: {
			status: 'Failed',
		}
	});
	console.log(orders);
	next();
}