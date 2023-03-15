import type { AxiosError } from "axios"

export const errorInterceptor = async (
    error: AxiosError
): Promise<AxiosError> => {
    if (error.message === "Network Error") {
        return await Promise.reject(new Error("Erro de conexão."))
    }

    return await Promise.reject(error)
}
