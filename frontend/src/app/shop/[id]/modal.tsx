"use client"

import Counter from "@/components/ui/counter";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/useStore";
import { useToast } from "@/components/ui/use-toast";

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

  const { toast } = useToast();

  const addItemToCart = async (name: string, quantity: number, image: string, total: number) => {
    try {
      updateProducts(
        {
          productName: name,
          productImage: image,
          quantity: quantity,
          total: total,
        },
      );
      router.back();
      
    } catch (error) {
      toast({
        title: "An error ocurred adding a item to the cart",
        description: `Error: ${error}`,
      });
    }}

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={(e) => router.back()}>
      <DialogOverlay>
        <DialogContent className="flex flex-col bg-white mb-36 gap-12 justify-start sm:max-h-screen h-screen w-screen sm:max-w-[848px]">
          <DialogHeader className="flex flex-col gap-3 text-left">
            <DialogTitle className="text-2xl font-bold">
              {item.name}
            </DialogTitle>
            <div className="w-full bg-primary h-[1px]" />
          </DialogHeader>
          <div className="flex flex-col overflow-y-scroll sm:flex-row gap-12 items-start">
            <Image
              width={500}
              height={500}
              src={item.image}
              alt="Cake image"
              className="sm:w-[50%] object-fill rounded-2xl"
            />
            <section className="flex flex-col gap-3 sm:w-[50%]">
              <section className="flex flex-col sm:w-96">
                <strong className="text-2xl font-bold">${item.price}</strong>
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
                <Counter />
                <DialogClose asChild>
                  <Button onClick={(e) => addItemToCart(item.name, 1, item.image, item.price * 1)} >Add to cart ${item.price}</Button>
                </DialogClose>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
