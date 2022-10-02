import { Box } from "@mui/material"
import { FC } from "react"
import { NavBar } from "../../ui/components";


const drawerWidth: number = 240;

interface Props {
    children: React.ReactNode
}

export const JournalLayout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display:'flex' }}>

        <NavBar drawerWidth={drawerWidth} />

        {/* Sidebar drawerWidth*/}

        <Box component='main'
            sx={{ flexGrow: 1, p:3 }}
        >
            {/* Toolbar */}

            { children }
        </Box>

    </Box>
  )
}
