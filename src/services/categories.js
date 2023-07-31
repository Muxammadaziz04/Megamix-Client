import api from "./api"

export const getCategories = async (query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/categories?${params.toString()}`)
    return data
}