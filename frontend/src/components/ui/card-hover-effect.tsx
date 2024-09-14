"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    previewDescription: string;
    image: string;
    price: number;
    detailDescription: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link href={`/shop/${item.id}`}
          key={item?.image}
          className="relative group text-neutral-800 block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <section>
          <Card className='flex flex-col w-full items-center sm:h-96'>
          <Image src={item.image} width={300} height={300} className='sm:h-36 sm:w-36 size-72 rounded-2xl object-center object-cover'  alt='hola'/>
          <div className='flex flex-col gap-3 py-6 sm:py-3 items-center sm:items-start w-full sm:justify-normal'>
            <h1 className='text-xl font-bold'>{item.name}</h1>
            <p className='opacity-80 sm:text-left text-center'>{item.previewDescription}</p>
            <strong className='text-xl font-bold'>${item.price}</strong>
            </div>
          </Card>
          </section>
          </Link>
      ))}
      </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 drop-shadow-2xl overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-primary relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-xl font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
