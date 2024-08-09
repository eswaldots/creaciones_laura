"use client"

import { useMemo } from "react";
import { useRouter } from "next/navigation"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";

type ComponentProps = {
	items: Array<{
		name: string;
		previewDescription: string;
		price: number;
		categoryName: string;
		image: string;
		detailDescription: string;
		id: number;
	}>;
};

export default function ListProducts({ items }: ComponentProps) {
	const router = useRouter();

	const products = useMemo(
		() => items.map((item, index) => <li onClick={(() => router.push('shop/' + (item.id)))} key={item.id}>{item.name}</li>),
		[items],
	);

	return <ol className='flex flex-col items-center w-full justify-center'>
	<Input className='h-10'/>
		<HoverEffect items={items}/>
	</ol>;
}
