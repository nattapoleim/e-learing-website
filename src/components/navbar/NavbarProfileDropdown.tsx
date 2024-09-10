import { AuthService } from '@/services/AuthService'
import useUserStore from '@/store/userStore'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NavbarProfileDropdown() {
   const { user, setUser } = useUserStore()
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const navigate = useNavigate()

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleLogout = () => {
      AuthService.logout()
      setAnchorEl(null)
      setUser(null)
      navigate('/')
   }
   return (
      <div>
         <Button
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant='outlined'
            color='inherit'
         >
            {user?.name.split(' ')[0]}
         </Button>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose} disabled>
               Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
               My account
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
         </Menu>
      </div>
   )
}

export default NavbarProfileDropdown
