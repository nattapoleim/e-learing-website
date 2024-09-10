import { Button } from '@/components/ui/button'
import { Course } from '@/models/course'
import useUserStore from '@/store/userStore'
import { CircleCheckBig, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function CoursePage() {
   const [course, setCourse] = useState<Course>()
   const { user } = useUserStore()
   const { id } = useParams()
   const navigate = useNavigate()
   console.log(user)

   useEffect(() => {
      const courseId = id ? parseInt(id) : undefined
      const fetchCourseData = async () => {
         if (courseId === undefined) {
            navigate('/errorpage')
            return
         }
         try {
            const getCourse = await Course.fetchCourse(courseId)
            setCourse(getCourse)
            if (!getCourse) {
               navigate('/errorpage')
               return
            }
         } catch (error) {
            console.error('Error fetch course data failed: ', error)
            if (!course) {
               navigate('/errorpage')
               return
            }
         }
      }
      fetchCourseData()
   }, [course, id, navigate])

   return (
      <section className='container mt-10'>
         <main>
            <div className='flex flex-col-reverse items-center w-full px-4 sm:px-10 md:px-0 md:flex-row'>
               <div className='w-full mt-10 space-y-4 md:w-1/2 md:mt-0'>
                  <h1 className='text-3xl font-semibold'>{course?.name}</h1>
                  <p>{course?.description}</p>
               </div>
               <div className='w-full md:w-1/2 '>
                  <img
                     src={course?.image}
                     className='mx-auto shadow'
                     alt={course?.name + '_image'}
                  />
               </div>
            </div>
            <div className='my-10 rounded-md bg-secondary'>
               <div className='p-4 space-y-4 overflow-hidden'>
                  {course?.lectures.map((lecture, index) => (
                     <article
                        key={lecture.id}
                        className='flex items-center justify-between px-5 py-2 transition-all rounded-md bg-background hover:bg-primary/20'
                     >
                        <div className='flex flex-col items-start gap-6 sm:items-center sm:flex-row md:py-4'>
                           <div className='text-4xl md:text-6xl text-primary'>0{index + 1}</div>
                           <div>
                              <h2 className='font-medium md:text-xl'>{lecture.title}</h2>
                              <p className='inline-flex items-center gap-2 mt-2 text-sm sm:text-[1rem] text-slate-600'>
                                 <Clock className='size-4' /> {lecture.duration}
                              </p>
                           </div>
                        </div>
                        <div className='flex items-center gap-4'>
                           <div>{lecture.completed && <CircleCheckBig />}</div>
                           <Link to={`/courses/${course.id}/${lecture.id}`}>
                              <Button>Learn</Button>
                           </Link>
                        </div>
                     </article>
                  ))}
               </div>
            </div>
         </main>
      </section>
   )
}

export default CoursePage
