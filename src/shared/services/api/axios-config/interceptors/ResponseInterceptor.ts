import type { AxiosResponse } from "axios"

export const responseInterceptor = async (
    response: AxiosResponse
): Promise<AxiosResponse> => {
    return await Promise.resolve(response)
}
