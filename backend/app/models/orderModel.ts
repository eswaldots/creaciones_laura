import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

export class OrderModel {
	static async getOrders() {
		const orders = await prisma.order.findMany({
			include: {
				orderItems: true,
			}
		});
		return orders;
	}

	static async createOrder(order: any) {
		const newOrder = await prisma.order.create({
			data: {
				orderItems: {
					create: order.orderItems
				},
				name: order.name,
				email: order.email,
				phone: order.phone,
				address: order.address,
				date: order.date,
				total: order.total,
				status: order.status,
			},
		});

		return newOrder;
	}
}
