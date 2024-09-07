import { ThemeProvider } from '@/components/theme-provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

// components
import Navbar from '@/components/Navbar'

function App() {
   return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/login' element={<LoginPage />} />
               <Route path='/register' element={<RegisterPage />} />
               <Route path='/about' element={<AboutPage />} />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
