import Loader from "@/components/ui/loader";
import { FetchProduct } from "@/lib/data/fetch-product";
import Modal from "./modal";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const product = await FetchProduct(params.id.toString());

  return product ? <Modal item={product} /> : <Loader />;
}