import { Course } from '@/models/course'
import { Circle, CircleCheckBig } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CoursePage() {
   const [course, setCourse] = useState<Course>()
   const { id } = useParams()

   useEffect(() => {
      const courseId = id ? parseInt(id) : undefined
      const fetchCourseData = async () => {
         if (courseId === undefined) return
         try {
            const getCourse = await Course.fetchCourse(courseId)
            setCourse(getCourse)
         } catch (error) {
            console.error('Error fetch course data failed: ', error)
         }
      }
      fetchCourseData()
   }, [id])

   return (
      <section className='container'>
         <h1 className='text-2xl'>{course?.name}</h1>
         <p>{course?.description}</p>
         <div className='space-y-2'>
            {course?.lectures.map(lecture => (
               <div key={lecture.id} className='flex items-center justify-between p-2 border'>
                  <div>
                     <h3>{lecture.title}</h3>
                     <p>{lecture.duration}</p>
                  </div>
                  <div>{lecture.completed ? <CircleCheckBig /> : <Circle />}</div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default CoursePage
