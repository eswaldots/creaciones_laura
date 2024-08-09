"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export default function Customers() {
	type customer = {
		name: string;
		quote: string;
	};

	const customers: Array<customer> = [
		{
			name: "Sarah L.",
			quote: "The cakes from this shop are simply divine! I ordered a red velvet cake for my sister's birthday, and it was the best cake we've ever had. The texture was perfect, and the frosting was to die for. Will definitely be ordering again!",
		},
		{
			name: "John M.",
			quote: "I tried the chocolate fudge cake, and it exceeded all my expectations. Rich, moist, and incredibly flavorful. The app made it so easy to order and track my delivery. Highly recommend this cake shop to all dessert lovers.",
		},
		{
			name: "Emily R.",
			quote: "Great selection of cakes and excellent customer service. I had a small issue with my order, but it was resolved quickly and professionally. The strawberry shortcake was delicious and beautifully presented. Will be back for more!"
		},
		{
			name: "Alex W.",
			quote: "Absolutely fantastic! The app is user-friendly and the delivery was on time. I ordered a custom birthday cake for my daughter, and it looked and tasted amazing. She was thrilled with the design, and the flavor was spot on. Thank you for making her birthday special!"
		},
		{
			name: "Lisa K.",
			quote: "I am in love with this cake shop! The app made it so easy to order, and the cakes are always fresh and delicious. My favorites are the lemon drizzle and the carrot cake. Perfect for any occasion or just a sweet treat for myself. Highly recommended!"
		}
	];

	return (
		<div className="flex flex-col w-screen gap-6 px-12 sm:px-36 items-center">
			<h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-accent">
				Our customers
			</h1>
			<InfiniteMovingCards speed="slow" items={customers} />
		</div>
	);
}
