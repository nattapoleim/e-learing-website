import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function Footer() {
   return (
      <footer className='pt-10 pb-6 mt-20 border-t min-h-52'>
         <main className='container flex items-center justify-between h-full'>
            <div>
               <Link to='/'>
                  <h2 className='font-serif text-5xl font-semibold tracking-widest text-primary'>
                     VAAN
                     <br />
                     DEMY.
                  </h2>
               </Link>
               <p className='font-semibold tracking-widest text-primary'>Learning Space</p>
            </div>
            <div className='grid gap-2 text-xl uppercase text-end'>
               <Link to='/'>
                  <Button variant='link' className='text-2xl font-light text-current'>
                     Home
                  </Button>
               </Link>
               <Link to='/about'>
                  <Button variant='link' className='text-2xl font-light text-current'>
                     About
                  </Button>
               </Link>
            </div>
         </main>
         <p className='mt-6 text-sm text-center uppercase text-slate-600'>
            © 2024 Nattapol Eiamsa-Ard
         </p>
      </footer>
   )
}

export default Footer
