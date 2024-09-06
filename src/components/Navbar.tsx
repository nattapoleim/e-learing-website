import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

function Navbar() {
   const { theme } = useTheme()

   console.log(theme)

   return (
      <header className='py-4 mb-10 border-b'>
         <nav className='container flex items-center justify-between'>
            <Link to='/' className='text-2xl font-medium text-primary'>
               VDM
            </Link>
            <div className='flex items-center gap-2'>
               <Link to='/about'>
                  <Button
                     variant='link'
                     className={cn(
                        theme === 'dark' && 'text-white',
                        theme === 'light' && 'text-slate-950',
                     )}
                  >
                     About
                  </Button>
               </Link>
               <ModeToggle />
               <Link to='/login'>
                  <Button>Login</Button>
               </Link>
            </div>
         </nav>
      </header>
   )
}

export default Navbar
