import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function PaymentDetails({ total }: { total: number }) {

	const { pending } = useFormStatus();
	
	return (
		<div className="flex flex-col bg-white rounded-2xl w-full sm:w-[40%] h-72 p-6 gap-6 drop-shadow-xl">
			<section className="flex flex-col gap-3">
				<h1 className="text-xl font-semibold">Payment details</h1>
				<hr />
			</section>
			<section className="flex justify-between items-center w-full">
				<h1 className="text-lg opacity-50">Discount:</h1>
				<strong className="opacity-50">0%</strong>
			</section>
			<hr />
			<section className="flex justify-between items-center w-full">
				<h1 className="text-xl font-bold">Total:</h1>
				<strong className="opacity-50">${total}</strong>
			</section>
			<Button
				type="submit"
				disabled={total >= 1 ? false : true}
				className="h-16 mt-3"
			>
				{pending ? 'Loading...' : 'Pay now'}  
			</Button>
		</div>
	);
}
