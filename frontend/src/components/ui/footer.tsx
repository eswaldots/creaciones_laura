export default function Footer() {
	return (
		<div className='flex flex-col px-36 py-12 gap-12 w-screen bg-primary h-[294px]'>
		<div className='flex flex-row justify-between'>
		<section className="flex flex-col gap-3 lg:text-left text-center justify-top">
			<h1 className='font-bold text-5xl'>CREACIONES LAURA</h1>
			<span className='opacity-50'>THIS IS FAKE WEBSITE</span>
		</section>
				<section className="hidden lg:flex flex-col gap-6">
			<h1 className='font-bold text-2xl'>Contact us</h1>
			<span className='opacity-50'>creacioneslaura@gmail.com</span>
		</section>
				<section className="hidden lg:flex flex-col gap-6">
			<h1 className='font-bold text-2xl '>Our stores</h1>
			<div className='flex flex-col gap-3'>
			<span className='opacity-50'>Caracas</span>
			<span className='opacity-50'>California</span>
			</div>
		</section>
		</div>
		<div className='flex flex-col w-full gap-6 justify-center items-center '>
			<div className='w-full bg-slate-300 rounded-xl h-[1px]'/>
			<span className='opacity-50 font-bold text-2xl'>Creaciones Laura 2024</span>
		</div>
		</div>
		)
}