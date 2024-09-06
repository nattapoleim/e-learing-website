import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/login' element={<LoginPage />} />
               <Route path='/about' element={<AboutPage />} />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
