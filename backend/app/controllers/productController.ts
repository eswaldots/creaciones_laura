import { Request, Response } from "express";
import { ProductModel } from "../models/productModel";
import { Prisma } from "@prisma/client";

export class ProductController {
	static async getAllProducts(req: Request, res: Response) {
		const products = await ProductModel.getAllProducts(
			JSON.stringify(req.query),
		);

		res.status(200).json(products);
	}

	static async getProductsById(req: Request, res: Response) {
		try {
			const products = await ProductModel.getProductsById(req.params.id);

			res.status(200).json(products);
		} catch (error) {
			console.log(error);

			res.status(500).json({
				error: "Internal server error",
			});
		}
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

	static async updateProduct(req: Request, res: Response) {
		try {
			const updatedProduct = await ProductModel.updateProduct(
				Number(req.params.id),
				req.body,
			);

			res.status(200).json(updatedProduct);
		} catch (error) {
			console.log(error);

			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	static async updateCategory(req: Request, res: Response) {
		try {
			const updatedCategory = await ProductModel.updateCategory(
				req.params.id,
				req.body,
			);

			res.status(200).json(updatedCategory);
		} catch (error) {
			console.log(error);

			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	static async deleteProduct(req: Request, res: Response) {
		try {
			const deleteProduct = await ProductModel.deleteProduct(
				req.params.id,
			);

			res.status(200).json(deleteProduct);
		} catch (error) {
			console.log(error);

			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	static async deleteCategory(req: Request, res: Response) {
		try {
			const deleteCategory = await ProductModel.deleteCategory(
				req.params.id,
			);

			res.status(200).json(deleteCategory);
		} catch (error) {
			console.log(error);

			res.status(500).json({
				error: "Internal server error",
			});
		}
	}
}
