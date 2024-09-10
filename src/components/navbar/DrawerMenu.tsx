import { AuthService } from '@/services/AuthService'
import useUserStore from '@/store/userStore'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'

const links = [
   { title: 'Home', path: '/' },
   { title: 'About', path: '/about' },
]

const DrawerMenu = ({ toggleDrawer }: any) => {
   const { user, setUser } = useUserStore()
   const navigate = useNavigate()

   const handleLink = (path: string) => {
      navigate(path)
   }

   const handleLogout = () => {
      AuthService.logout()
      setUser(null)
      navigate('/')
   }

   return (
      <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
         <Typography
            variant='h6'
            sx={{
               color: 'primary.main',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               paddingY: '1rem',
            }}
         >
            {user?.name}
         </Typography>
         <Divider />
         <List>
            {links.map(link => (
               <ListItem key={link.title} disablePadding>
                  <ListItemButton onClick={() => handleLink(link.path)}>
                     <ListItemText
                        primary={link.title}
                        sx={{
                           '& .MuiListItemText-primary': {
                              color: 'black',
                           },
                        }}
                     />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            <ListItem disablePadding>
               <ListItemButton disabled>
                  <ListItemText primary='Profile' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton disabled>
                  <ListItemText primary='Setting' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton onClick={handleLogout}>
                  <ListItemText primary='Log Out' />
               </ListItemButton>
            </ListItem>
         </List>
      </Box>
   )
}

export default DrawerMenu
