import type { ProductCart } from "@/lib/definitions/product-cart";
import { create } from "zustand";


interface Products {
  products: ProductCart[];
  updateProducts: (products: ProductCart) => void;
}

export const useStore = create<Products>((set) => ({
  products: [],
  /*      "orderItems": [
        {"productName":"Birthday cake",
        "quantity":2,
    "total":300
},{"productName":"Banana cake",
"quantity":1,
"total":300}]*/
  updateProducts: (products: ProductCart) =>
    set((state) => ({ products: [...state.products, products] })),
}));
