import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

const prisma: any = new PrismaClient();

dotenv.config();

interface Product {
	name: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export class ProductModel {
	static async getAllProducts(query: string): Promise<string[]> {
		if (query) {
			const { category } = JSON.parse(query);

			const products = await prisma.product.findMany({
				where: {
					category: {
						name: category,
					},
				},
			});
			
			return products;
		}

		const products : string[] = await prisma.product.findMany();
		const productsWithURL = products.map((product : any) => ({
			...product,
			image: `${process.env.BASE_URL}/images/${product.image}`,
		}));
		return productsWithURL;
	}

	static async getProductsById(id: number): Promise<string> {
		const product = await prisma.product.findUnique({
			where: {
				id: id,			},
		});

		const productWithURL = {
			...product,
			image: `${process.env.BASE_URL}/images/${product.image}`,
		};

		return productWithURL;
	}

	static async getAllCategories(): Promise<string[]> {
		const categories = await prisma.category.findMany();

		return categories;
	}

	static async createProducts(
		input: [
			{
				name: string;
				price: number;
				detailDescription: string;
				previewDescription: string;
				category: string;
				image: string;
			},
		],
	) {
		try {
			for (let i = 0; i < input.length; i++) {
				const { name, price, category, detailDescription, previewDescription, image } = input[i];

				const newProduct = await prisma.product.create({
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

				return newProduct;
			}
		} catch (error) {
			console.log(error)
			return {message: 'Unexpected error'};
		}
	}

	static async createCategories(input: { name: string }) {
		const { name } = input;

		const newCategory = await prisma.category.create({
			data: {
				name: name,
			},
		});

		return newCategory;
	}

	static async updateProduct(id: number, input: any) {
		const updatedProduct = await prisma.product.update({
			where: {
				id: id,
			},
			data: {
				...input,
			},
		});
		console.log(updatedProduct, 'hola');
		return updatedProduct;
	}

	static async updateCategory(id: string, input: any) {
		const updatedCategory = await prisma.category.update({
			where: {
				id: id,
			},
			data: {
				...input,
			},
		});
	}

	static async deleteProduct(id: string) {
		const deleteProduct = await prisma.product.delete({
			where: {
				id: Number(id),
			},
		});
	}

	static async deleteCategory(id: string) {
		const deletedProduct = await prisma.category.delete({
			where: {
				id: id,
			},
		});
	}
}
