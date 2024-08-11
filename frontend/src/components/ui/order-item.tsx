import Image from "next/image"

type itemsProps = {
	image: string,
	name: string,
	quantity: number,
	total: number
}

export default function OrderItem({image, name, quantity, total}:  itemsProps) {
	return (
		<div className="flex flex-row text-neutral-800 gap-6 items-center ">
			<Image alt='product' className='size-12 object-cover rounded-xl' src={image} width={300} height={300}/>
			<section className='flex flex-col'>
				<h1 className='text-xl font-bold'>{name}</h1>
				<section className='flex gap-6'>
				<strong>${total}</strong> <span className='opacity-50'>{quantity} units</span>
				</section>
			</section>
		</div>
	)
}