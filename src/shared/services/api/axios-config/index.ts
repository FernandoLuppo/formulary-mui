import axios from "axios"
import { responseInterceptor, errorInterceptor } from "./interceptors"

const Api = axios.create({
    baseURL: "http://localhost:3001"
})

Api.interceptors.response.use(
    async response => await responseInterceptor(response),
    async error => await errorInterceptor(error)
)

export { Api }
