import AppTheme from '@/AppTheme'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import AboutPage from '@/pages/AboutPage'
import CoursePage from '@/pages/CoursePage'
import HomePage from '@/pages/HomePage'
import LecturePage from '@/pages/LecturePage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'
import RegisterPage from '@/pages/RegisterPage'

// components
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import ProtectRoute from '@/components/protectRoute'

// Store
import useUserStore from '@/store/userStore'

function App() {
   const { loadUser } = useUserStore()

   useEffect(() => {
      loadUser()
      console.log('load user')
   }, [loadUser])

   return (
      <AppTheme>
         <CssBaseline />
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='*' element={<NotFoundPage />} />
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
            <Footer />
         </BrowserRouter>
      </AppTheme>
   )
}

export default App
