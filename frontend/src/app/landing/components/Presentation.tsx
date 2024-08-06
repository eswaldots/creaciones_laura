import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Presentation() {
	return (
		<Card className="flex flex-col justify-center items-center p-12 text-neutral-800 text-center lg:text-left sm:p-36 bg-secondary rounded-none w-screen h-[546px]">
			<section className="animate-in slide-in-from-bottom fade-in flex duration-1000 flex-row items-center justify-between">
				<div className="flex flex-col lg:items-start items-center  text-5xl gap-8 lg:w-[50%]  font-bold">
					<h1><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-accent">Sweet</span> moments, freshly maked with love</h1>
					<span className="text-xl font-normal opacity-80">
						Customized cakes, treats and every thing sweet for all
						your special moments.
					</span>
					<Button className='text-xl h-12 w-36'>Shop now</Button>
				</div>
				<img className="lg:flex hidden rounded-full w-[422px]" src="donut.gif" />
			</section>
		</Card>
	);
}
