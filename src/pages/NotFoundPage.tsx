import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Construction } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
   const navigate = useNavigate()
   const handleRedirect = () => {
      navigate('/')
   }

   return (
      <Box
         component='section'
         sx={{
            height: 'calc(100svh - 4rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
         }}
      >
         <Stack spacing={4} direction='row' useFlexGap alignItems={'center'}>
            <Construction style={{ height: '3rem', width: '3rem', color: '#d32f2f' }} />
            <Typography
               component={'p'}
               color='error'
               fontSize={'3rem'}
               className='font-serif text-5xl'
            >
               404 Page Not Found
            </Typography>
         </Stack>
         <Button onClick={handleRedirect} variant='outlined' color='inherit' size='large'>
            Go to Homepage
         </Button>
      </Box>
   )
}

export default NotFoundPage
