"use client"
import Presentation from "./components/Presentation";
import Categories from "./components/Categories"
import BestProducts from "./components/BestProducts"

export default function Home() {
  return (
    <main className="flex flex-col gap-12 antialased text-white w-screen min-h-screen">
    <Presentation/>
    <Categories/>
    <BestProducts/>
    </main>
  );
}
