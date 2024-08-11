"use client";

import { useRouter } from "next/navigation";
import PaymentDetails from "./components/PaymentDetails";
import PaymentForm from "./components/PaymentForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMemo, useState } from "react";
import { useTotal } from "@/hooks/use-total";
import { useStore } from "@/hooks/useStore";
import { useOrder } from "@/hooks/use-order";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import Success from "@/icons/success";
import { Button } from "@/components/ui/button";

export default function Home() {
	const router = useRouter();
	const [order, newOrder] = useOrder();

	type Inputs = {
		first_name: string;
		last_name: string;
		email: string;
		phone: string;
		ubication: string;
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const [isOpen, setIsOpen] = useState(false);

	const onSubmit: SubmitHandler<Inputs> = async (data) => {await newOrder(data, products, total)
	 order.status === 201 && setIsOpen(true)
	};

	const products = useStore((state) => state.products);
	const total = useMemo(() => useTotal(products), []);

	return (
		<>
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='text-neutral-800'>
					<DialogHeader className='flex justify-center items-center'>
					<Success className='text-primary size-24'/>
						<h1 className='text-5xl font-bold'>Success!</h1>
					</DialogHeader>
					<section className='flex flex-col text-center'>
					<p className='text-lg opacity-50'>
						Your order has been successfully sent to our stores, within an estimated period of 30 minutes your order will be with you. 
					</p>
					</section>
					<DialogFooter>
						<Button onClick={() => router.push('/shop')} className='w-full h-12 p-6 text-xl font-bold'>Keep shopping</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col text-neutral-800 mt-20 gap-12 px-6 py-12 sm:py-12 sm:px-36 w-screen"
		>
			<h1 className="text-4xl font-bold">Order products</h1>
			<section className="flex flex-col sm:flex-row gap-12 w-full">
				<PaymentForm register={register} errors={errors} />
				<PaymentDetails total={total} />
			</section>
		</form>
		</>
	);
}
