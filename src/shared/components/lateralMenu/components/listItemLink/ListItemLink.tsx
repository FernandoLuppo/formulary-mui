import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"
import type { IListItemLink } from "../../../../types"

export const ListItemLink: React.FC<IListItemLink> = ({
  to,
  label,
  onClick,
  icon
}) => {
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItemButton selected={match?.pathname === to} onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
