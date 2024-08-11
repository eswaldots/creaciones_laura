"use client"

import PaymentDetails from "./components/PaymentDetails";
import PaymentForm from "./components/PaymentForm";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {
	type Inputs = {
		example: string;
		exampleRequired: string;
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch("example"))
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-neutral-800 mt-20 gap-12 px-6 py-12 sm:py-12 sm:px-36 w-screen">
			<h1 className="text-4xl font-bold">Order products</h1>
			<section className="flex flex-col sm:flex-row gap-12 w-full">
				<PaymentForm register={register} errors={errors}/>
				<PaymentDetails />
			</section>
		</form>
	);
}
