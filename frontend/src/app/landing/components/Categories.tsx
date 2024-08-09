import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useMemo } from "react";

type Data = {
	category: string,
	title: string,
	src: string,
	link: string
}

const data : Array<Data> = [
	{
		category: "Bread",
		title: "Fresh and stuning bread",
		src: "/categories/bread.jpg",
		link: "/shop?search=Breads"
	},
	{
		category: "Donuts",
		title: "Indulge in heavenly donuts",
		src: "/categories/donuts.png",
		link: "/shop?search=Donuts"
	},
	{
		category: "Ice Creams",
		title: "Happiness in a Cone",
		src: "/categories/ice_cream.jpg",
		link: "/shop?search=Ice-Creams"
	},
	{
		category: "Cakes",
		title: "The finest cakes to delight your taste buds",
		src: "/categories/cake.jpeg",
		link: "/shop?search=Cakes"
	},
	{
		category: "Cheesecakes",
		title: "Something for Everyone",
		src: "/categories/cheesecake.avif",
		link: "/shop?search=Cheesecakes"
	},
	{
		category: "Cupcakes",
		title: "Taste buds in mind",
		src: "/categories/cupcake.avif",
		link: "/shop?search=Cupcakes"	
	},
	{
		category: "Cookies",
		title: "Sweet treats, unique delights",
		src: "/categories/cookie.jpg",
		link: "/shop?search=Cookies"	
	},
];

export default function Categories() {
	const cards = useMemo(() => data.map((card, index) => (
		<Card key={card.src} card={card} link={card.link} index={index} />
		)), [])
	return (
		<div className="flex sm:px-36 gap-12 flex-col w-screen px-12">
			<div className="flex flex-col gap-3">
				<p className="text-xl text-foreground opacity-80">
					See our collections
				</p>
				<span className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-accent">Our best creations home made</span>
			</div>
			<Carousel items={cards} />
		</div>
	);
}
