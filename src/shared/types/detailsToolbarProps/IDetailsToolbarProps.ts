export interface IDetailsToolbarProps {
    showButtonNew: boolean
    showButtonReturn: boolean
    showButtonDelete: boolean
    showButtonSave: boolean
    showButtonSaveAndReturn: boolean
    showButtonNewLoading: boolean
    showButtonReturnLoading: boolean
    showButtonDeleteLoading: boolean
    showButtonSaveLoading: boolean
    showButtonSaveAndReturnLoading: boolean
    whenClickInNew: () => void
    whenClickInReturn: () => void
    whenClickInDelete: () => void
    whenClickInSave: () => void
    whenClickInSaveAndReturn: () => void
}
