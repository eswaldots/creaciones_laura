"use client";

import { useEffect, useState } from "react";
import ListProducts from "./components/ListProducts";
import ListCategories from "./components/ListCategories";
import Loader from "@/components/ui/loader";
import { useProducts } from "@/hooks/use-products"
import { useCategories } from "@/hooks/use-categories";
import { useSearchParams } from "next/navigation"

export default function Home() {
	const searchParams = useSearchParams();

	const [currentCategory, setCurrentCategory] = useState(searchParams.get('search')); 

	const categories = useCategories();
	const [products, getProducts] = useProducts();

	useEffect(() => {
		getProducts(currentCategory);
	}, [currentCategory]);

		useEffect(() => {
		setCurrentCategory(searchParams.get('search'))
	}, [searchParams])

	return products ? (
		<div className='flex flex-col min-h-screen text-neutral-800 sm:mt-24 mt-36 lg:mt-36 justify-center w-screen items-center gap-12 px-12 lg:px-36'>
		<h1 className='text-5xl font-bold text-neutral-800'>Our menu</h1>
		<div className="flex flex-row w-full items-start lg:gap-36 gap-24 justify-between">
			<ListCategories currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} items={categories} />
			<ListProducts items={products} />
		</div>
		</div>
	) : (
			<Loader />
	);
}
