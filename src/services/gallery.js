import api from "./api"

export const getFotos = async (query) => {
    const params = new URLSearchParams(query)
    const {data} = await api.get(`/foto?${params.toString()}`)
    return data
}

export const getFotoById = async (id, query) => {
    const params = new URLSearchParams(query)
    const {data} = await api.get(`/foto/${id}?${params.toString()}`)
    return data
}