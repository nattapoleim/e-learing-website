import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

function Footer() {
   return (
      <Box
         component={'footer'}
         borderTop={'1px solid #e2e8f0'}
         bgcolor='primary.main'
         className='pt-10 pb-6 mt-20 min-h-52'
      >
         <Container
            maxWidth='xl'
            className='flex flex-col items-center justify-between h-full gap-10 sm:flex-row'
         >
            <Box>
               <Link to='/' className='no-underline'>
                  <Typography
                     color='white'
                     variant='body1'
                     className='font-serif text-3xl font-semibold tracking-widest sm:text-6xl '
                  >
                     VAANDEMY.
                  </Typography>
               </Link>
               <Typography
                  color='white'
                  className='text-sm font-semibold tracking-widest text-end sm:text-lg'
               >
                  Learning Space
               </Typography>
            </Box>
            <Box className='grid grid-cols-2 gap-2 text-xl uppercase sm:grid-cols-1 text-end'>
               <Link to='/'>
                  <Button variant='text' className='text-lg text-white sm:text-2xl'>
                     Home
                  </Button>
               </Link>
               <Link to='/about'>
                  <Button variant='text' className='text-lg text-white sm:text-2xl'>
                     About
                  </Button>
               </Link>
            </Box>
         </Container>
         <Typography className='mt-6 text-sm text-center uppercase text-slate-200'>
            © 2024 Nattapol Eiamsa-Ard
         </Typography>
      </Box>
   )
}

export default Footer
