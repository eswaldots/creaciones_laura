"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRouter = void 0;
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
exports.OrdersRouter = (0, express_1.Router)();
exports.OrdersRouter.get("/", orderController_1.OrderController.getOrders);
exports.OrdersRouter.post("/", orderController_1.OrderController.createOrder);
exports.OrdersRouter.delete("/");
