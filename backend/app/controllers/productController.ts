import { Request, Response } from "express";
import { ProductModel } from "../models/productModel"; 
import { Prisma } from "@prisma/client";

export class ProductController {
	static async getAllProducts(req: Request, res: Response) {
		const products = await ProductModel.getAllProducts(JSON.stringify(req.query));

		res.status(200).json(products);
	}

	static async getAllCategories(req: Request, res: Response) {
		const categories = await ProductModel.getAllCategories();

		res.status(200).json(categories);
	}

	static async createProducts(req: Request, res: Response) {
	const newProducts = await ProductModel.createProducts([req.body]);

	res.status(201).json(newProducts);
	}

	static async createCategories(req: Request, res: Response) {
	const newCategories = await ProductModel.createCategories(req.body);

	res.status(201).json(newCategories);
	}
}