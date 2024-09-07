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
      <div className='p-10 mt-5 border rounded-md shadow'>
         <p className='mb-4 text-xl font-semibold uppercase text-primary'>Courses</p>
         <div className='grid items-center w-full grid-cols-3 gap-10 justify-evenly'>
            {courses?.map(course => (
               <Card
                  key={course.id}
                  className='w-[350px] h-[14.5rem] flex flex-col justify-between'
               >
                  <CardHeader>
                     <CardTitle>{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <CardDescription>{course.description}</CardDescription>
                  </CardContent>
                  <CardFooter className='justify-end pb-5'>
                     <Link to={`/courses/${course.id}`}>
                        <Button>See More</Button>
                     </Link>
                  </CardFooter>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default CourseList
