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
		await fetch("http://127.0.0.1:1234/products/categories")
		.then((res : {data:{string}}) => setCategories(res.data));
	}

	return categories;
};


