import { Environment } from "../../../environment"
import type { IPeopleWithTotalCount } from "../../../types"
import { Api } from "../axios-config"

const getAll = async (page = 1, filter = ""): Promise<IPeopleWithTotalCount | Error> => {
    try {
        const urlRelative = `/people?_page=${page}&_limit=${Environment.LINE_LIMIT}&fullName_like=${filter}`
        const { data, headers } = await Api.get(urlRelative)

        if (data) {
            return {
                data,
                totalCount: Number(headers["x-total-count"]) || Environment.LINE_LIMIT
            }
        }

        return new Error("Error to try list the records.")

    }  catch(error) {
        return new Error( (error as {message: string}).message || "Error to try list the records.")
    }
}
const getById = async (): Promise<any> => {
    try {
        const { data } = await Api.
    } catch(error) {

    }
}
const create = async (): Promise<any> => {
    try {
        const { data } = await Api.
    } catch(error) {

    }
}
const updateById = async (): Promise<any> => {
    try {
        const { data } = await Api.
    } catch(error) {

    }
}
const deleteById = async (): Promise<any> => {
    try {
        const { data } = await Api.
    } catch(error) {

    }
}

export const PeopleService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
