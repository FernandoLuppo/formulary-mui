import axios from "axios"

import { Environment } from "../../../environment"
import { responseInterceptor, errorInterceptor } from "./interceptors"

const Api = axios.create({
    baseURL: Environment.BASE_URL
})

Api.interceptors.response.use(
    async response => await responseInterceptor(response),
    async error => await errorInterceptor(error)
)

export { Api }
