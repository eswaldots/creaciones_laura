"use client";

import Counter from "@/components/ui/counter";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/useStore";
import { toast } from "react-toastify";
import { useState } from "react";

interface Props {
  item: {
    name: string;
    previewDescription: string;
    image: string;
    price: number;
    detailDescription: string;
    id: string;
  };
}

export default function Modal({ item }: Props) {
  const router = useRouter();

  const updateProducts = useStore((state) => state.updateProducts);

  const addItemToCart = async (
    name: string,
    quantity: number,
    image: string,
    total: number
  ) => {
    try {
      updateProducts({
        productName: name,
        productImage: image,
        quantity: quantity,
        total: total,
      });

      toast.success(`Added ${name} to cart`);

      router.back();
    } catch (error) {
      toast.error("An error ocurred adding a item to the cart");
    }
  };

  const [count, setCount] = useState(1);

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={(e) => router.back()}>
      <DialogOverlay>
        <DialogContent className="flex flex-col overflow-y-auto no-scrollbar bg-white mb-36 gap-12 justify-start sm:max-h-screen h-screen w-screen sm:max-w-[848px]">
          <DialogHeader className="flex flex-col gap-3 text-left">
            <DialogTitle className="text-2xl font-bold">
              {item.name}
            </DialogTitle>
            <div className="w-full bg-primary h-[1px]" />
          </DialogHeader>
          <div className="flex flex-col overflow-y-auto no-scrollbar sm:flex-row gap-12 items-start">
            <div className='overflow-hidden'>
            <Image
              width={500}
              height={500}
              src={item.image}
              alt="Cake image"
              className="w-full h-full object-fill rounded-2xl" 
            />
            </div>
            <section className="flex flex-col gap-3 sm:w-[50%]">
              <section className="flex flex-col sm:w-96">
                <strong className="text-2xl font-bold">${item.price / 100}</strong>
                <h1 className="text-2xl font-semibold opacity-80">
                {item.name}
                </h1>
              </section>
              <p className="opacity-50">{item.detailDescription}</p>
            </section>
          </div>
          <DialogFooter className="fixed left-0 bottom-0 p-6 rounded-b-2xl w-full bg-white flex flex-col gap-3">
            <div className="flex flex-col w-full gap-6">
              <div className="w-full bg-primary h-[1px]" />
              <div className="flex flex-row sm:gap-12 gap-3 justify-end">
                <Counter count={count} setCount={setCount} />
                <Button
                className='h-full'
                onClick={(e) =>
                    addItemToCart(item.name, count, item.image, item.price * count)
                  }
                >
                  <span className="text-xl font-bold">Add to cart ${item.price * count / 100}</span>
                </Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
