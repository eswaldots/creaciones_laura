import axios from "axios"

export const api = axios.create({
	baseURL: "http://http://127.0.0.1:1234"
})