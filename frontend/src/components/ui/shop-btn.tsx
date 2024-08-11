"use client"

import { useState, useMemo } from "react";
import ShopIcon from "./shop-icon";
import { Button } from "./button"
import { Card, CardHeader, CardFooter, CardContent } from "./card";
import { Transition } from "@headlessui/react"
import { useStore } from "@/hooks/useStore"
import OrderItem from "./order-item";
import { useRouter } from "next/navigation";

export default function ShopBtn() {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false)

	const products = useStore((state) => state.products)

	const listProducts = useMemo(() => products.map((product, index : number) => <OrderItem key={product.productImage} name={product.productName} image={product.productImage} quantity={product.quantity} total={product.total}></OrderItem>), [products])

	return (
		<>
		<button className='opacity-80' onClick={(e) => setIsOpen(!isOpen)}>
		<ShopIcon/>
		</button>
		<Transition show={isOpen}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-300 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
		> 
			<Card className={'flex flex-col opacity-100 justify-between fixed inset-x-0 mx-auto lg:inset-x-auto lg:mx-0 lg:right-36 lg:top-24 rounded-2xl z-50 h-[494px] w-full sm:w-[447px] drop-shadow-2xl bg-white'}>
				<CardHeader className='w-full rounded-t-2xl h-12 bg-primary'/>
				<CardContent className="flex flex-col items-start p-6 gap-6 justify-start h-full">{products.length >= 1 ? listProducts : <h1 className='text-2xl font-bold text-center'>You don't ordered anything to show</h1>}</CardContent>
				<CardFooter className='flex flex-row justify-between'>
					<Button onClick={(e) => {router.push('/payment'), setIsOpen(false)}} className='w-full h-12'>Pay</Button>
				</CardFooter>
			</Card>
			</Transition>
		</>
		)
}
