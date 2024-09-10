import { Button } from '@/components/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import { Course } from '@/models/course'
import { Link } from 'react-router-dom'

type CourseListProps = {
   courses: Course[]
}

function CourseList({ courses }: CourseListProps) {
   return (
      <div className='p-4 md:p-10'>
         <h3 className='mb-4 font-serif text-3xl font-semibold text-center uppercase '>Courses</h3>
         <div className='grid w-full gap-4 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
            {courses?.map(course => (
               <Card
                  key={course.id}
                  className='group md:h-[26rem] flex flex-col justify-between md:hover:-translate-y-2 transition-all hover:shadow-xl duration-500'
               >
                  <CardHeader>
                     <div className='overflow-hidden  bg-green-300 rounded-lg h-[15rem] md:h-[10rem] xl:h-[11rem]'>
                        <img
                           className='w-full object-cover h-full scale-[1.06] group-hover:scale-110 transition-all duration-500'
                           src={course.image}
                           alt={course.name + '_image'}
                        />
                     </div>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                     <CardTitle className='text-lg'>{course.name}</CardTitle>
                     <CardDescription>{course.description}</CardDescription>
                  </CardContent>
                  <CardFooter className='justify-end pb-5'>
                     <Link to={`/courses/${course.id}`}>
                        <Button className=''>See More</Button>
                     </Link>
                  </CardFooter>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default CourseList
