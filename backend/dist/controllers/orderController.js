"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const orderModel_1 = require("../models/orderModel");
class OrderController {
    static getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield orderModel_1.OrderModel.getOrders();
                return res.status(200).json(orders);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    static createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(Date.now());
                const order = yield orderModel_1.OrderModel.createOrder(req.body);
                return res.status(201).json(order);
            }
            catch (error) {
                console.log('Fatal error: ', error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.OrderController = OrderController;
