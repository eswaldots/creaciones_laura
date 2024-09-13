import { API_URL } from "../consts/api-url"

export const FetchCategories = async () => {

    const data = await fetch(`${API_URL}/products/categories`);

    const categories = data.json();

    return categories
}