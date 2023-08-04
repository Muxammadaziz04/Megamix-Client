import api from "./api"

export const getVacancies = async (query) => {
    const params = new URLSearchParams(query)
    const {data} = await api.get(`/vacancy?${params.toString()}`)
    return data
}