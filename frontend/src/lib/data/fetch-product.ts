import { API_URL } from "../consts/api-url"

export const FetchProduct = async (id : string) => {
    
    const data = await fetch(`${API_URL}/products/${id}}`);

    const product = data.json();

    return product
}