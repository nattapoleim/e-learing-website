import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#34d399',
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
