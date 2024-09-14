import Loader from "@/components/ui/loader"
import { FetchProduct } from "@/lib/data/fetch-product"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

export default async function Page({params} : Params) {
	const product = await FetchProduct(params.id)

	return product ? (
		<div>{product.name}</div>
		) : (<Loader/>)
}