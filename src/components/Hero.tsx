import { Button } from '@/components/ui/button'

function Hero() {
   return (
      <section className='relative min-h-[calc(100svh-4rem)] mb-10 bg-hero bg-center bg-cover'>
         <div className='absolute inset-0 bg-black/20'></div>
         <div className='absolute bg-background bottom-20 left-20 min-h-[22rem] w-[35rem] p-6 pt-10 rounded-tr-[5rem] z-10 grid gap-4'>
            <h2 className='font-serif text-5xl font-medium'>Skills that drive you forward</h2>
            <p className='text-lg tracking-wide'>
               Technology and the world of work change fast — with us, you’re faster. Get the skills
               to achieve goals and stay competitive.
            </p>
            <a href='#categories'>
               <Button size='lg' className='w-full py-8 mt-10 text-lg'>
                  View All Course
               </Button>
            </a>
         </div>
      </section>
   )
}

export default Hero
