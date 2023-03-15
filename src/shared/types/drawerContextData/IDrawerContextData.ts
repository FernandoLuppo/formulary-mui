export interface IDrawerOptions {
    path: string
    label: string
    icon: JSX.Element
}

export interface IDrawerContextData {
    isDrawerOpen: true | false
    toggleDrawerOpen: () => void
    drawerOptions: IDrawerOptions[]
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}
