import { API_URL } from "../consts/api-url"

export const FetchProducts = async (category? : string | null) => {
    
    const data = await fetch(`${API_URL}/products${category ? `?category=${category}` : ''}`);

    const categories = data.json();

    return categories
}