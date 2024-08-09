import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { api } from './api'

export const useProduct = () => {
	const params = useParams<{tag: string, item: string, id:string}>();

	const [products, setProducts] = useState<Array<{id: number, name: string}>>([])

	const fetchProducts = async () => await api.get('/products')
	.then(res => setProducts(res.data))

	useEffect(() => {fetchProducts();}, [])

	const product = products.filter((product) => product.id === Number(params.id))
	return product[0]
}