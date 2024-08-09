"use client"

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useProduct } from "@/hooks/use-product";
import Loader from "@/components/ui/loader";

export default function Page({params} : Params) {
	const product = useProduct();

	return product ? (
		<div>{product.name}
		<img src={product.image} />
		</div>
		) : (<Loader/>)
}