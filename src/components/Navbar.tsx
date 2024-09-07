import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { AuthService } from '@/services/AuthService'
import useStore from '@/store/store'
import { Link } from 'react-router-dom'

function Navbar() {
   const { theme } = useTheme()
   const { user, setUser } = useStore()

   const hadleLogout = () => {
      AuthService.logout()
      setUser(null)
   }

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
               {user ? (
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button variant={'outline'}>{user.name.split(' ')[0]}</Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className='w-56'>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>Profile</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={hadleLogout}>Log out</DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
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

export default Navbar
