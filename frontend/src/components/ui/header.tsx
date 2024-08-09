import { Sheet, SheetTrigger, SheetContent } from "./sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ShopMenu from "./shop-menu"
import ShopBtn from "./shop-btn"

export default function Header() {

    const items = [{
    name: "Cakes",
    link: "/shop?search=Cakes",
  },
  {
    name: "Bread",
    link: "/shop?search=Breads",
  },
  {
    name: "Donuts",
    link: "/shop?search=Donuts",
  },
  {
    name: "Ice Creams",
    link: "/shop?search=Ice-Creams",
  },
  {
    name: "Cheesecakes",
    link: "/shop?search=Cheesecakes",
  },
  {
    name: "Cupcakes",
    link: "/shop?search=Cupcakes",
  },
  {
    name: "Cookies",
    link: "/shop?search=Cookies"
  }
  ] 

  return (
    <>
    <header className="fixed top-0 text-neutral-800 text-2xl font-bold left-0 overflow-x-hidden items-center z-50 bg-primary w-screen opacity-95 flex h-20 shrink-0 px-10 lg:px-36">
      <Sheet>
        <SheetTrigger asChild>
          <Button  size="icon" className="lg:hidden ">
            <MenuIcon className="size-12 text-white opacity-80" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className='bg-primary text-white opacity-80' side="top">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 opacity-80 py-6 text-2xl font-bold">
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-teal-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-teal-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Shop
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-teal-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2  transition-colors hover:bg-teal-500  focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Contact
        </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden text-white font-bold text-2xl lg:flex" prefetch={false}>
        Creaciones Laura
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="relative ml-auto text-xl font-normal items-center text-white lg:flex gap-6">
        <Link
          href="/"
          className="duration-300 group hidden opacity-80 lg:inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition hover:scale-105  focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <ShopMenu items={items}/>
        <Link
          href="#"
          className="duration-300 group hidden opacity-80 lg:inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition hover:scale-105 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Contact
        </Link>
        <ShopBtn/>
      </nav>
    </header>
    </>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}