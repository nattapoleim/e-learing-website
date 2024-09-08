import { ThemeProvider } from '@/components/theme-provider'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import AboutPage from '@/pages/AboutPage'
import CoursePage from '@/pages/CoursePage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

// components
import Navbar from '@/components/navbar/Navbar'

// Store
import ProtectRoute from '@/components/protectRoute'
import LecturePage from '@/pages/LecturePage'
import useUserStore from '@/store/userStore'

function App() {
   const { loadUser } = useUserStore()

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
               <Route path='/courses/:id' element={<CoursePage />} />
               <Route
                  path='/courses/:courseId/:lectureId'
                  element={
                     <ProtectRoute>
                        <LecturePage />
                     </ProtectRoute>
                  }
               />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
