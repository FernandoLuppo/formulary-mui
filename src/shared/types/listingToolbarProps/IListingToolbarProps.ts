export interface IListingToolbarProps {
    searchText: string
    showInputSearch: boolean
    whenChangingSearchText: (newText: string) => void
    showButtonNew: boolean
    whenClickInButtonNew: () => void
}
