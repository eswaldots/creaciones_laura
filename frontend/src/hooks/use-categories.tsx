import { useState, useEffect } from "react";
import { api } from "./api";

type Category = {
	id: number;
	name: string;
};

type props = {
	items: Array<{ name: string }>;
};

export const useCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getRooms();
	}, [])

	const getRooms = async () => {
		await api
		.get("/products/categories")
		.then((res) => setCategories(res.data));
	}

	return categories;
};


