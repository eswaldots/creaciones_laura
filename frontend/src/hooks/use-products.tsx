import { useState, useEffect } from "react";
import { api } from "./api"

export const useProducts = () => {
	const [products, setProducts] = useState(null);

	const getProducts = async (category? : string) => {
		await api.get(`/products?category=${category}`)
		.then(res => setProducts(res.data))
		console.log(products)
	}

	return [products, getProducts]
}