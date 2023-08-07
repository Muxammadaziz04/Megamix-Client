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

export const getVideos = async (query) => {
    const params = new URLSearchParams(query)
    const {data} = await api.get(`/video?${params.toString()}`)
    return data
}

export const getBanners = async () => {
    const {data} = await api.get('/sliders')
    return data
}