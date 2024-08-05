import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

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

		const products: string[] = await prisma.product.findMany();

		return products;
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
				description: string;
				category: string;
			},
		],
	) {
		try {
			for (let i = 0; i < input.length; i++) {
				const { name, price, category, description } = input[i];

				const newProduct = await prisma.product.create({
					data: {
						name: name,
						price: price,
						description: description,
						category: {
							connect: { name: category },
						},
					},
				});

				return newProduct;
			}
		} catch (error) {
			return error;
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
}
