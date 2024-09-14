import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Loader from "@/components/ui/loader";
import { FetchProduct } from "@/lib/data/fetch-product";

export default async function Page({params} : Params) {
	const product = await FetchProduct(params.id)

	return product ? (
		<div>{product.name}</div>
		) : (<Loader/>)
}