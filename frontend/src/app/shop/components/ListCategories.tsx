import Link from "next/link"

type props = {
	items: Array<{name: string, id:number}>,
	currentCategory: string | null,
}

export default function ListCategories({items, currentCategory} : props) {

	const listCategories = items.map((item, index) => 
		item.name === currentCategory ? <li className="flex items-center"><input type='checkbox' className='size-5' checked={true} key={item.id}/> <span className='font-semibold'>{item.name}</span></li> : 
		<Link href={`?search=${item.name}`} className="flex items-center"><input className='size-5' type='checkbox' checked={false} key={item.id}/> <span className='font-normal opacity-50'>{item.name}</span></Link>
		)

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