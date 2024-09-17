"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ProductModel = void 0;
const client_1 = require("@prisma/client");
const dotenv = __importStar(require("dotenv"));
const prisma = new client_1.PrismaClient();
dotenv.config();
class ProductModel {
    static getAllProducts(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query) {
                const { category } = JSON.parse(query);
                const products = yield prisma.product.findMany({
                    where: {
                        category: {
                            name: category,
                        },
                    },
                });
                return products;
            }
            const products = yield prisma.product.findMany();
            const productsWithURL = products.map((product) => (Object.assign(Object.assign({}, product), { image: `${process.env.BASE_URL}/images/${product.image}` })));
            return productsWithURL;
        });
    }
    static getProductsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield prisma.product.findUnique({
                where: {
                    id: id,
                },
            });
            return product;
        });
    }
    static getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield prisma.category.findMany();
            return categories;
        });
    }
    static createProducts(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                input.forEach((product) => __awaiter(this, void 0, void 0, function* () {
                    const { name, price, category, detailDescription, previewDescription, image } = product;
                    yield prisma.product.create({
                        data: {
                            name: name,
                            price: price,
                            detailDescription: detailDescription,
                            previewDescription: previewDescription,
                            image: image,
                            category: {
                                connect: { name: category },
                            },
                        },
                    });
                }));
            }
            catch (error) {
                console.log(error);
                return { message: 'Unexpected error' };
            }
        });
    }
    static createCategories(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = input;
            const newCategory = yield prisma.category.create({
                data: {
                    name: name,
                },
            });
            return newCategory;
        });
    }
    static updateProduct(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield prisma.product.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, input),
            });
            console.log(updatedProduct, 'hola');
            return updatedProduct;
        });
    }
    static updateCategory(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCategory = yield prisma.category.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, input),
            });
        });
    }
    static deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteProduct = yield prisma.product.delete({
                where: {
                    id: Number(id),
                },
            });
        });
    }
    static deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProduct = yield prisma.category.delete({
                where: {
                    id: id,
                },
            });
        });
    }
}
exports.ProductModel = ProductModel;
