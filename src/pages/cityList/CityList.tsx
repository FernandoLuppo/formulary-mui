import { useSearchParams } from "react-router-dom"
import { useMemo } from "react"
import { ListingToolbar } from "../../shared/components"
import { BasePageLayout } from "../../shared/layouts"

export const CityList: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const search = useMemo(() => {
        return searchParams.get("search") ?? ""
    }, [searchParams])

    return (
        <BasePageLayout
            title="Cities List"
            ListingToolbar={
                <ListingToolbar
                    showInputSearch
                    searchText={search}
                    whenChangingSearchText={text => {
                        setSearchParams({ search: text }, { replace: true })
                    }}
                />
            }
        >
            a
        </BasePageLayout>
    )
}
