import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { FC } from "react"
import { purpleTheme } from './purpleTheme';

interface Props{
    children: React.ReactNode
}

export const AppTheme: FC<Props> = ({children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
