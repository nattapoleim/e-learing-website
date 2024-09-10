import useUserStore from '@/store/userStore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
// components
import DrawerMenu from '@/components/navbar/DrawerMenu'
import NavbarProfileDropdown from '@/components/navbar/NavbarProfileDropdown'
import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
   const { user } = useUserStore()
   const [open, setOpen] = useState(false)

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen)
   }

   return (
      <Box component={'header'} bgcolor='primary.main' color='white' sx={{ height: '5rem' }}>
         <Container
            maxWidth='xl'
            component={'nav'}
            className='flex items-center justify-between h-full'
         >
            <Link
               component={RouterLink}
               to='/'
               underline='none'
               color='white'
               className='font-serif text-4xl font-medium tracking-wider'
            >
               VAANDEMY.{' '}
               <span className='block text-xs sm:inline-block font-noto'>Learning Space</span>
            </Link>
            <Box className='items-center justify-center hidden gap-4 sm:flex'>
               <LinkButton to='/'>Home</LinkButton>
               <LinkButton to='/about'>About</LinkButton>
               {user ? (
                  <NavbarProfileDropdown />
               ) : (
                  <Link component={RouterLink} to='/login'>
                     <Button variant='contained' color='inherit'>
                        Login
                     </Button>
                  </Link>
               )}
            </Box>

            <Button
               variant='contained'
               className='bg-white sm:hidden'
               color='primary'
               onClick={toggleDrawer(true)}
            >
               <Menu className='text-purple-600 size-6' />
            </Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
               <DrawerMenu toggleDrawer={toggleDrawer} />
            </Drawer>
         </Container>
      </Box>
   )
}

const LinkButton = ({ to, children }: { to: string; children: React.ReactNode }) => {
   return (
      <Link component={RouterLink} to={to} color='inherit' underline='none'>
         {children}
      </Link>
   )
}

export default Navbar
