import api from "./api"

export const getClub = async (query) => {
    const params = new URLSearchParams(query)
    const {data} = await api.get(`/club?${params.toString()}`)
    return data
}

export const getClubById = async (id, query) => {
    const params = new URLSearchParams(query)
    const {data} = await api.get(`/club/${id}?${params.toString()}`)
    return data
}