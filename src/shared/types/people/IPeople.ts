export interface IPeopleList {
    id: number
    email: string
    cityID: number
    fullName: string
}

export interface IPeopleDetails {
    id: number
    email: string
    cityID: number
    fullName: string
}

export interface IPeopleWithTotalCount {
    data: IPeopleList[]
    totalCount: number
}
