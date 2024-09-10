import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function Hero() {
   return (
      <Box
         component={'section'}
         className='relative min-h-[calc(100svh-4rem)] mb-10 bg-hero bg-center bg-cover'
      >
         <div className='absolute inset-0 bg-black/20'></div>
         <Box
            minHeight={'22rem'}
            width={'32rem'}
            display={'flex'}
            className='absolute flex-col  bg-white bottom-20 left-20 p-6 pt-10 rounded-tr-[5rem] z-10 gap-4'
         >
            <Typography variant='h2' className='font-serif text-4xl font-medium'>
               Skills that drive you forward
            </Typography>
            <Typography className='tracking-wide'>
               Technology and the world of work change fast — with us, you’re faster. Get the skills
               to achieve goals and stay competitive.
            </Typography>
            <Link href='#categories' className='mt-auto'>
               <Button variant='contained' size='large' className='w-full py-4 text-xl '>
                  View All Course
               </Button>
            </Link>
         </Box>
      </Box>
   )
}

export default Hero
