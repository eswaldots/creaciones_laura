import { Request, Response } from "express";
import { OrderModel } from "../models/orderModel";

export class OrderController {
	static async getOrders(req: Request, res: Response) {
		try {
			const orders = await OrderModel.getOrders();

			return res.status(200).json(orders);
		}

		catch (error) {
			console.log(error)

			return res.status(500).json({ message: "Internal server error" });
		}
	}

	static async createOrder(req: Request, res: Response) {
		try {
			
			console.log(Date.now())
			const order = await OrderModel.createOrder(req.body);

			return res.status(201).json(order);
		} catch (error) {
			console.log('Fatal error: ', error);
			return res.status(500).json({ message: "Internal server error" });
		}
	}
}
