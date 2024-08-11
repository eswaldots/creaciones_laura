import { create } from "zustand"

interface Product {      productName: string,
      productImage: string,
      quantity: number,
      total: number}

interface Products {
    products: Product[]
    updateProducts: (products : Product) => void 
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
	updateProducts: (products : Product) => set((state) => ({products: [...state.products, products]}))
}))