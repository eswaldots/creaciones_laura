import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Loader from "@/components/ui/loader";
import { FetchProduct } from "@/lib/data/fetch-product";
import Modal from "./modal";
import ItemDisplay from "./item-display";

export default async function Page({ params }: Params) {
  const product = await FetchProduct(params.id.toString());

  return product ? <Modal item={product} /> : <Loader />;
}
