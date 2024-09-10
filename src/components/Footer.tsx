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
         className='pt-10 pb-6 mt-20 min-h-52'
      >
         <Container maxWidth='xl' className='flex items-center justify-between h-full'>
            <Box>
               <Link to='/' className='no-underline'>
                  <Typography
                     color='primary'
                     variant='body1'
                     className='font-serif text-6xl font-semibold tracking-widest '
                  >
                     VAANDEMY.
                  </Typography>
               </Link>
               <Typography color='primary' className='font-semibold tracking-widest'>
                  Learning Space
               </Typography>
            </Box>
            <div className='grid gap-2 text-xl uppercase text-end'>
               <Link to='/'>
                  <Button variant='text' className='text-2xl font-light text-black'>
                     Home
                  </Button>
               </Link>
               <Link to='/about'>
                  <Button variant='text' className='text-2xl font-light text-black'>
                     About
                  </Button>
               </Link>
            </div>
         </Container>
         <p className='mt-6 text-sm text-center uppercase text-slate-600'>
            © 2024 Nattapol Eiamsa-Ard
         </p>
      </Box>
   )
}

export default Footer
