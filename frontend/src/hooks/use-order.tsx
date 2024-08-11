import { useEffect, useState } from "react";
import { api } from "./api";

interface Product {      productName: string,
      productImage: string,
      quantity: number,
      total: number}

type Inputs = {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	ubication: string;
};

type Products = Product[]

function addMinutes(date : Date, minutes : number) {
    return new Date(date.getTime() + minutes*60000);
}

export const useOrder = () => {
	const [order, setOrder] = useState({});

	const newOrder = async (inputs : Inputs, items: Product, total : number) => {

		const date = new Date

		const orderDate = addMinutes(date, 30)

		const {first_name, last_name, email, phone, ubication} = inputs

		await api.post('/orders', {
			name: first_name + ' ' + last_name,
			address: ubication,
			email: email,
			phone: String(phone),
			total: total,
			date: orderDate,
			status: "Pending",
			orderItems: items
		})
		.then(res => setOrder(res))
	}

	return [order, newOrder]
};
