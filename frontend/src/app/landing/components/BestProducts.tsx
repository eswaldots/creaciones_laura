"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { m } from "framer-motion";

const content = [
  {
    title: "Vanilla Bean Celebration Cake",
    description:
      "Our Vanilla Bean Celebration Cake is a festive delight. Layers of light, fluffy vanilla cake are filled and frosted with our signature vanilla bean buttercream. The cake is then adorned with a rainbow of sprinkles, making it perfect for birthdays or any joyous occasion. Each bite is a burst of pure, classic vanilla flavor.",
    content: (
      <Image
        src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
    price: 32,
  },
  {
    title: "Leemon cheesecake",
    description:
      "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sponge cake. It may be baked or unbaked (usually refrigerated). Cheesecake is usually sweetened with sugar and may be flavored or topped with fruit, whipped cream, nuts, cookies, fruit sauce, and/or chocolate syrup. Cheesecake can be prepared in many flavors, such as strawberry, pumpkin, key lime, chocolate, Oreo, chestnut, or toffee.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://media.istockphoto.com/id/1344848431/photo/slice-of-lemmon-dessert.webp?b=1&s=612x612&w=0&k=20&c=BsYJE33LNYDh3DSXFZ3ZgEuUm6B08SZyb3pbwWe0MEw="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    price: 39,
  },
  {
    title: "Pumpernickel Rye",
    description:
      "Our Pumpernickel Rye is a traditional German-style bread made with coarsely ground rye flour. This dense, dark bread has a robust flavor and a slightly sweet note from the addition of molasses. It's packed with fiber and has a long shelf life. Perfect for open-faced sandwiches or paired with strong cheeses and smoked meats.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    price: 7,
  },
  {
    title: "Pineapple Upside-Down Cake",
    description:
      "Our Pineapple Upside-Down Cake is a retro favorite. A moist, buttery cake is baked over a layer of caramelized brown sugar, pineapple rings, and maraschino cherries. When inverted, the fruit creates a beautiful and delicious topping. The cake is then glazed for extra moisture and shine. It's a perfect balance of sweet and tangy flavors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/6163264/pexels-photo-6163264.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    price: 33,
  },
];

export default function BestProducts() {
  return (
    <div className="flex flex-col w-screen text-center sm:px-36 px-12 gap-12">
      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-accent">
        Our best sellers
      </span>
      <StickyScroll content={content} />
    </div>
  );
}
