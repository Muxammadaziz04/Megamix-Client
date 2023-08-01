import api from "./api"

export const sendForm = async(body) => {
    const {data} = await api.post('/feedback', body)
    return data
}