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
exports.ProductController = void 0;
const productModel_1 = require("../models/productModel");
class ProductController {
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield productModel_1.ProductModel.getAllProducts(JSON.stringify(req.query));
            res.status(200).json(products);
        });
    }
    static getProductsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productModel_1.ProductModel.getProductsById(Number(req.params.id));
                res.status(200).json(products);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: "Internal server error",
                });
            }
        });
    }
    static getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield productModel_1.ProductModel.getAllCategories();
            res.status(200).json(categories);
        });
    }
    static createProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProducts = yield productModel_1.ProductModel.createProducts(req.body.items);
            res.status(201).json(newProducts);
        });
    }
    static createCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategories = yield productModel_1.ProductModel.createCategories(req.body);
            res.status(201).json(newCategories);
        });
    }
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedProduct = yield productModel_1.ProductModel.updateProduct(Number(req.params.id), req.body);
                res.status(200).json(updatedProduct);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: "Internal server error",
                });
            }
        });
    }
    static updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCategory = yield productModel_1.ProductModel.updateCategory(req.params.id, req.body);
                res.status(200).json(updatedCategory);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: "Internal server error",
                });
            }
        });
    }
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteProduct = yield productModel_1.ProductModel.deleteProduct(req.params.id);
                res.status(200).json(deleteProduct);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: "Internal server error",
                });
            }
        });
    }
    static deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteCategory = yield productModel_1.ProductModel.deleteCategory(req.params.id);
                res.status(200).json(deleteCategory);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: "Internal server error",
                });
            }
        });
    }
}
exports.ProductController = ProductController;
