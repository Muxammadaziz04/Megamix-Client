import api from "./api"

export const getNews = async (query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/news?${params.toString()}`)
    return data
}

export const getNewsById = async (id, query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/news/${id}?${params.toString()}`)
    return data
}