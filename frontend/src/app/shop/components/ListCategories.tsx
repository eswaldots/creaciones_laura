import { SetStateAction, useMemo, useState } from "react"

type props = {
	items: Array<{name: string, id:number}>,
	currentCategory: string,
	setCurrentCategory: SetStateAction<string>
}

export default function ListCategories({items, currentCategory, setCurrentCategory} : props) {
	const listCategories = useMemo(() => items.map((item, index) => 
		item.name === currentCategory ? <li className="flex items-center"><input type='checkbox' className='size-5' checked={true} key={item.id}/> <span className='font-semibold'>{item.name}</span></li> : 
		<li className="flex items-center"><input className='size-5' type='checkbox' checked={false} onClick={(e) => setCurrentCategory(item.name)} key={item.id}/> <span className='font-normal opacity-50'>{item.name}</span></li>
		), [items, currentCategory])

	return (
		<div className='hidden sm:flex flex-col lg:w-96 gap-12'>
		<div className='flex flex-col gap-3'>
		<h1 className='text-2xl font-bold opacity-50'>Categories</h1>
		<div className='w-full bg-teal-400 rounded-sm h-[3px]'></div>
		</div>
		<ol className='flex indent-6 flex-col gap-3'>{listCategories}</ol>
		</div>
		)
}