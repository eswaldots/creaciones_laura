import { useStore } from "@/hooks/useStore";
import { API_URL } from "./consts/api-url";
import type { Product } from "./definitions/product";
import { ProductCart } from "./definitions/product-cart";
import { State } from "./definitions/state";
import z from "zod";

const OrderSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(3, { message: "First name must be at least 3 characters long" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" }),
});

export const OrderAction = async (
  items: ProductCart[],
  state: State,
  formData: FormData
) => {
  const order = OrderSchema.safeParse(formData);

  if (!order.success) {
    return {
      errors: order.error.flatten().fieldErrors,
      message: "Please fix the errors in the form",
      status: 400,
    };
  }

  const { firstName, lastName, address, email, phone } = order.data;

  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      phone: phone,
      orderItems: items,
    }),
  });

  if (!response.ok) {
    return {
      errors: [],
      message: "Something went wrong",
      status: response.status,
    };
  }

  return {
    status: response.status,
  };
};
