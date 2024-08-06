import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import Link from 'next/link'

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, index) => {
				return (
					<div
						key={"dummy-content" + index}
						className="flex flex-col gap-12 bg-[#F5F5F7] dark:bg-neutral-800 p-8 g md:p-14 rounded-3xl mb-4"
					>
						<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
							<span className="font-bold text-neutral-700 dark:text-neutral-200">
								The first rule of Apple club is that you boast
								about Apple club.
							</span>{" "}
							Keep a journal, quickly jot down a grocery list, and
							take amazing class notes. Want to convert those
							notes to text? No problem. Langotiya jeetu ka mara
							hua yaar is ready to capture every thought.
						</p>
						<Image
							src="/donuts.png"
							alt="Macbook mockup from Aceternity UI"
							height="500"
							width="500"
							className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
						/>
					</div>
				);
			})}
		</>
	);
};

const data = [
	{
		category: "Bread",
		title: "Fresh and stuning bread",
		src: "/categories/bread.jpg",
		content: <DummyContent />,
	},
	{
		category: "Donuts",
		title: "Indulge in heavenly donuts",
		src: "/categories/donuts.webp",
		content: <DummyContent />,
	},
	{
		category: "Ice Creams",
		title: "Happiness in a Cone",
		src: "/categories/ice_cream.jpg",
		content: <DummyContent />,
	},

	{
		category: "Cakes",
		title: "The finest cakes to delight your taste buds",
		src: "/categories/cake.jpeg",
		content: <Link href="/">Home</Link>,
		link: "hola"
	},
	{
		category: "Cheesecakes",
		title: "Something for Everyone",
		src: "/categories/cheesecake.avif",
		content: <DummyContent />,
	},
	{
		category: "Cupcakes",
		title: "Taste buds in mind",
		src: "/categories/cupcake.avif",
		content: <DummyContent />,
	},
	{
		category: "Cookies",
		title: "Sweet treats, unique delights",
		src: "/categories/cookie.jpg",
		content: <DummyContent />,
	},
];

export default function Categories() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} link={card.link} index={index} />
	));

	return (
		<div className="flex sm:px-36  flex-col w-screen p-12">
			<div className="flex flex-col gap-3">
				<p className="text-xl text-foreground opacity-80">
					See our collections
				</p>
				<strong className="text-5xl font-semibold text-primary">
					Our best creations home made
				</strong>
			</div>
			<Carousel items={cards} />
		</div>
	);
}
