"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--teal-100)",
    "var(--yellow-100)",
    "var(--orange-100)",
    "var(--red-100)"
  ];

  const buttonColors = [
    "var(--teal-500)",
    "var(--yellow-500)",
    "var(--orange-500)",
    "var(--red-500)"
  ];

  const listContent = useMemo(() => content.map((item, index) => (
            <div key={item.title + index} className="flex flex-col text-pretty text-foreground gap-6 my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-pretty max-w-sm"
              >
               <span className='opacity-50'> {item.description}</span> 
              </motion.p>
              <div className="flex flex-row items-center gap-6">
              <strong className='text-xl'>100$</strong>
                                    <Button size='lg' style={{
                backgroundColor: buttonColors[activeCard % backgroundColors.length]
              }} >Shop now</Button>  
              </div>
            </div>
          )), [buttonColors])

  console.log(backgroundColors[activeCard % backgroundColors.length]);
  return (
    <motion.div
          animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center gap-12 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative  flex text-left items-start px-4">
        <div className="max-w-2xl">
        {listContent}  
        <div className="h-40" />
        </div>
      </div>
            <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

