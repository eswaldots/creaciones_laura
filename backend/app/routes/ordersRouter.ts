import { Router } from "express";
import { OrderController } from "../controllers/orderController";

export const OrdersRouter = Router();

OrdersRouter.get("/", OrderController.getOrders);

OrdersRouter.post("/", OrderController.createOrder);

OrdersRouter.delete("/");