import { ThemeProvider } from '@/components/theme-provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

// components
import Navbar from '@/components/Navbar'
import useStore from '@/store/store'
import { useEffect } from 'react'

function App() {
   const { loadUser } = useStore()

   useEffect(() => {
      loadUser()
      console.log('load user')
   }, [loadUser])

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
