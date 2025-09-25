import axios from 'axios'

const requestBase =  "https://packtpublishing.github.io/Simplifying-State-Management-in-React-Native";
const api = axios.create({
    baseURL: requestBase,
    timeout: 5000,
})

export const fetchCars = async (cancelToken) => {
    const response = await api.get("/home.json", { cancelToken })   
    return response.data
}         

export const fetchUsers = async (cancelToken) => {
    const response = await api.get("/users.json", { cancelToken })   
    return response.data
} 