import { Api } from "../axios-config"
import { Environment } from "../../../environment"
import type { IPeopleDetails, IPeopleWithTotalCount } from "../../../types"

const getAll = async (
    page = 1,
    filter = ""
): Promise<IPeopleWithTotalCount | Error> => {
    try {
        const urlRelative = `/people?_page=${page}&_limit=${Environment.LINE_LIMIT}&fullName_like=${filter}`
        const { data, headers } = await Api.get(urlRelative)

        if (data !== null) {
            return {
                data,
                totalCount:
                    Number(headers["x-total-count"]) | Environment.LINE_LIMIT
            }
        }

        return new Error("Error to try list the records.")
    } catch (error) {
        return new Error("Error to try list the records.")
    }
}
const getById = async (id: number): Promise<IPeopleDetails | Error> => {
    try {
        const { data } = await Api.get(`/people/${id}`)
        if (data !== null) return data

        return new Error("Error to try list the records.")
    } catch (error) {
        return new Error("Error to try list the records.")
    }
}
const create = async (
    user: Omit<IPeopleDetails, "id">
): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IPeopleDetails>("/people", user)
        if (data !== null) return data.id

        return new Error("Error to try create the records.")
    } catch (error) {
        return new Error("Error to try create the records.")
    }
}
const updateById = async (
    id: number,
    user: IPeopleDetails
): Promise<undefined | Error> => {
    try {
        await Api.put(`/people/${id}`, user)
    } catch (error) {
        return new Error("Error to try update the records.")
    }
}
const deleteById = async (id: number): Promise<undefined | Error> => {
    try {
        await Api.delete(`/people/${id}`)
    } catch (error) {
        return new Error("Error to try delete the records.")
    }
}

export const PeopleService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
