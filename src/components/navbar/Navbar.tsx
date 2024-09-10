import useUserStore from '@/store/userStore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

// components
import NavbarProfileDropdown from '@/components/navbar/NavbarProfileDropdown'

function Navbar() {
   const { user } = useUserStore()

   return (
      <Box component={'header'} sx={{ height: '5rem', borderBottom: '1px solid #e2e8f0' }}>
         <Container
            maxWidth='xl'
            component={'nav'}
            className='flex items-center justify-between h-full'
         >
            <Link
               component={RouterLink}
               to='/'
               underline='none'
               className='font-serif text-4xl font-medium tracking-wider'
            >
               VAANDEMY. <span className='text-xs font-noto'>Learning Space</span>
            </Link>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
               }}
            >
               <LinkButton to='/'>Home</LinkButton>
               <LinkButton to='/about'>About</LinkButton>
               {user ? (
                  <NavbarProfileDropdown />
               ) : (
                  <Link component={RouterLink} to='/login'>
                     <Button variant='contained'>Login</Button>
                  </Link>
               )}
            </Box>
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
