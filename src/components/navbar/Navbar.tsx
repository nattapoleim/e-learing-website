import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import useUserStore from '@/store/userStore'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

// components
import NavbarProfileDropdown from '@/components/navbar/NavbarProfileDropdown'

function Navbar() {
   const { user } = useUserStore()

   return (
      <Box component={'header'} sx={{ height: '6rem', borderBottom: '1px solid #e2e8f0' }}>
         <nav className='container flex items-center justify-between h-full'>
            <Link to='/' className='font-serif text-2xl font-medium tracking-wider text-primary'>
               VAANDEMY. <span className='text-xs font-noto'>Learning Space</span>
            </Link>
            <div className='flex items-center gap-4'>
               <LinkButton to='/'>Home</LinkButton>
               <LinkButton to='/about'>About</LinkButton>
               <ModeToggle />
               {user ? (
                  <NavbarProfileDropdown />
               ) : (
                  <Link to='/login'>
                     <Button>Login</Button>
                  </Link>
               )}
            </div>
         </nav>
      </Box>
   )
}

const LinkButton = ({ to, children }: { to: string; children: React.ReactNode }) => {
   return (
      <Link to={to}>
         <Button variant='link' className={cn('px-1 text-current')}>
            {children}
         </Button>
      </Link>
   )
}

export default Navbar
