import api from "./api"

export const getProducts = async (query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/products?${params.toString()}`)
    return data
}