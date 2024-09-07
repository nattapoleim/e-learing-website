import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import useUserStore from '@/store/userStore'
import { Link } from 'react-router-dom'

// components
import NavbarProfileDropdown from '@/components/navbar/NavbarProfileDropdown'

function Navbar() {
   const { user } = useUserStore()

   return (
      <header className='py-4 mb-10 border-b'>
         <nav className='container flex items-center justify-between'>
            <Link to='/' className='text-2xl font-medium text-primary'>
               VDM
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
      </header>
   )
}

const LinkButton = ({ to, children }: { to: string; children: React.ReactNode }) => {
   const { theme } = useTheme()
   return (
      <Link to={to}>
         <Button
            variant='link'
            className={cn(
               'px-1',
               theme === 'dark' && 'text-white',
               theme === 'light' && 'text-slate-950',
            )}
         >
            {children}
         </Button>
      </Link>
   )
}

export default Navbar
