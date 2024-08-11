import { X509Certificate } from "crypto";

interface Product {
	productName: string;
	productImage: string;
	quantity: number;
	total: number;
}

type products = Product[];

export const useTotal = (products : products) => {
	let balance = 0;

	for (let i = 0; i < products.length; i++) {
		balance += products[i].total
	}
		return balance
};
