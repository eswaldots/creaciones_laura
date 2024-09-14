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

	return <ol className='flex flex-col items-center w-full justify-center'>
	<Input className='w-full h-10'/>
		<HoverEffect items={items}/>
	</ol>;
}
