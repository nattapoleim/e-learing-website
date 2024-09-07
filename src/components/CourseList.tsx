import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Course } from '@/models/course'
import { Link } from 'react-router-dom'

type CourseListProps = {
   courses: Course[]
}

function CourseList({ courses }: CourseListProps) {
   return (
      <div className='p-10 mt-5 border rounded-md shadow'>
         <p className='mb-4 text-xl font-semibold uppercase text-primary'>Courses</p>
         <div>
            <Accordion type='single' collapsible>
               {courses?.map((course, index) => (
                  <AccordionItem
                     className='mb-2 rounded-md'
                     value={`item-${index + 1}`}
                     key={course.id}
                  >
                     <AccordionTrigger className='text-lg'>{course.name}</AccordionTrigger>
                     <AccordionContent className='w-full '>
                        <p>{course.description}</p>
                        <div className='flex items-center justify-end w-full mt-6'>
                           <Link to={`/courses/${course.id}`}>
                              <Button color='primary' size='sm' className='ml-auto'>
                                 see more
                              </Button>
                           </Link>
                        </div>
                     </AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </div>
      </div>
   )
}

export default CourseList
