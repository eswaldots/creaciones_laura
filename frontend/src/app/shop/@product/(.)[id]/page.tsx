import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Loader from "@/components/ui/loader";
import { FetchProduct } from "@/lib/data/fetch-product";
import Modal from "../../[id]/modal";

export default async function Page({ params }: Params) {
  const product = await FetchProduct(params.id.toString());
  console.log(product);

  return product ? <Modal item={product} /> : <Loader />;
}