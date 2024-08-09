"use client"

import Presentation from "./landing/components/Presentation";
import Categories from "./landing/components/Categories"
import BestProducts from "./landing/components/BestProducts"
import Customers from "./landing/components/Customers";
import Footer from "@/components/ui/footer"

export default function Home() {
  return (
    <>
    <main className="flex flex-col overflow-y-auto mt-20 gap-24 antialased overflow-x-hidden text-white w-screen min-h-screen">
    <Presentation/>
    <Categories/>
    <BestProducts/>
    <Customers/>
    <Footer/>
    </main>
    </>
  );
}
