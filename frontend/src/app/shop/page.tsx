import ListProducts from "./components/ListProducts";
import ListCategories from "./components/ListCategories";
import Loader from "@/components/ui/loader";
import { FetchCategories } from "@/lib/data/fetch-categories";
import { FetchProducts } from "@/lib/data/fetch-products";

interface Props {
	searchParams: { search: string | null };
}

export default async function Home({ searchParams }: Props) {
	const currentCategory = searchParams.search;

	const categories = await FetchCategories();
	const products = await FetchProducts(currentCategory);

	return products ? (
		<div className='flex flex-col min-h-screen text-neutral-800 sm:mt-24 mt-36 lg:mt-36 justify-center w-screen items-center gap-12 px-3 lg:px-36'>
		<h1 className='text-5xl font-bold text-neutral-800'>Our menu</h1>
		<div className="flex flex-row w-full items-start lg:gap-36 gap-24 justify-between">
			<ListCategories currentCategory={currentCategory} items={categories} />
			<ListProducts items={products} />
		</div>
		</div>
	) : (
			<Loader />
	);
}
