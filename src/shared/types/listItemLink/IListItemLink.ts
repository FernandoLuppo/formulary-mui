export interface IListItemLink {
  to: string
  label: string
  icon: JSX.Element
  onClick: (() => void) | undefined
}
