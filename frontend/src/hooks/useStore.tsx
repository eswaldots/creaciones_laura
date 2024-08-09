import { create } from "zustand"

export const useStore = create((set) => ({
	products: [],
	/*      "orderItems": [
        {"productName":"Birthday cake",
        "quantity":2,
    "total":300
},{"productName":"Banana cake",
"quantity":1,
"total":300}]*/
	updateProducts: (products) => set((state) => ({products: [...state.products, products]}))
}))