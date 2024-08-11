import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"
import { useState } from "react";
import { Dialog, DialogFooter, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./dialog";
import { Button } from "./button"
import Counter from "./counter"
import { useStore } from "@/hooks/useStore"
import { useToast } from "@/components/ui/use-toast"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    previewDescription: string;
    image: string;
    price: number;
    detailDescription: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { toast } = useToast();

  const [itemCount, setItemCount] = useState(1);

  const updateProducts = useStore((state) => state.updateProducts);

  const AddProduct = (name: string, quantity: number, image: string,  total: number) => {
    try {
    updateProducts(
    {
      productName: name,
      productImage: image,
      quantity: quantity,
      total: total
    }
      )
    toast({
      title: `Added ${name} to cart`,
      description: `${quantity} units, $${total}`
    })
  }

    catch(error) {
      toast({
        title: "An error ocurred adding a item to the cart",
        description: `Error: ${error}`
      })
    }
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Dialog onOpenChange={(e) => setItemCount(1)}>
        <div
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
          <DialogTrigger asChild>
          <button>
          <Card className='flex flex-col w-full items-center sm:h-96'>
          <Image src={item.image} width={300} height={300} className='sm:h-36 sm:w-36 size-72 rounded-2xl object-center object-cover'  alt='hola'/>
          <div className='flex flex-col gap-3 py-6 sm:py-3 items-center sm:items-start w-full sm:justify-normal'>
            <h1 className='text-xl font-bold'>{item.name}</h1>
            <p className='opacity-80 sm:text-left text-center'>{item.previewDescription}</p>
            <strong className='text-xl font-bold'>${item.price}</strong>
            </div>
          </Card>
          </button>
          </DialogTrigger>
           <DialogContent className="flex flex-col bg-white mb-36 gap-12 justify-start sm:max-h-screen h-screen w-screen sm:max-w-[848px]">
        <DialogHeader className="flex flex-col gap-3 text-left">
          <DialogTitle className='text-2xl font-bold'>{item.name}</DialogTitle>
          <div className='w-full bg-primary h-[1px]'/>
        </DialogHeader>
        <div className="flex flex-col overflow-y-scroll sm:flex-row gap-12 items-start">
        <Image width={500} height={500} src={item.image} alt='Cake image' className='sm:w-[50%] object-fill rounded-2xl'/>
        <section className='flex flex-col gap-3 sm:w-[50%]'>
        <section className='flex flex-col sm:w-96'>
        <strong className='text-2xl font-bold'>${item.price}</strong>
        <h1 className='text-2xl font-semibold opacity-80'>{item.name}</h1>
        </section>
        <p className='opacity-50'>{item.detailDescription}</p>
        </section>
        </div>
        <DialogFooter className='fixed left-0 bottom-0 p-6 rounded-b-2xl w-full bg-white flex flex-col gap-3'>
          <div className='flex flex-col w-full gap-6'>
          <div className='w-full bg-primary h-[1px]'/>
          <div className='flex flex-row sm:gap-12 gap-3 justify-end'>
          <Counter setCount={setItemCount} count={itemCount}/>
          <DialogClose asChild>
          <Button onClick={(e) => AddProduct(item.name, itemCount, item.image, item.price * itemCount)} className='text-xl font-bold w-48 h-12'>Add to cart ${item.price * itemCount}</Button>
          </DialogClose>
          </div>
          </div>
        </DialogFooter>
      </DialogContent>
          </div>
          </Dialog>
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
