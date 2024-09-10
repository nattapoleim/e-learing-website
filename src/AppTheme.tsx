import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#7c3aed',
      },
      background: {
         default: '#f1f5f9',
      },
   },
   typography: {
      fontFamily: ['Noto Sans', 'sans-serif'].join(','),
   },
})

function AppTheme({ children }: { children: React.ReactNode }) {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppTheme
