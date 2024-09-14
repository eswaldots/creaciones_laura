import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import { DialogHeader, DialogFooter, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";;
import Image from "next/image";

export default function ItemDisplay({ item }: { item: any }) {
  return (
    <DialogContent className="flex flex-col bg-white mb-36 gap-12 justify-start sm:max-h-screen h-screen w-screen sm:max-w-[848px]">
      <DialogHeader className="flex flex-col gap-3 text-left">
        <DialogTitle className="text-2xl font-bold">{item.name}</DialogTitle>
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
            <h1 className="text-2xl font-semibold opacity-80">{item.name}</h1>
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
              <Button />{" "}
            </DialogClose>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
