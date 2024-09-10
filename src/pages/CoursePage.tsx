import { Course } from '@/models/course'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { CircleCheckBig, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function CoursePage() {
   const [course, setCourse] = useState<Course>()
   const { id } = useParams()
   const navigate = useNavigate()

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
   }, [id])

   return (
      <Box component={'section'} className='py-10 bg-white'>
         <Container maxWidth='lg'>
            <Box className='flex flex-col-reverse items-center w-full px-4 sm:px-10 md:px-0 md:flex-row'>
               <Box className='w-full mt-10 space-y-4 md:w-1/2 md:mt-0'>
                  <Typography
                     variant='h1'
                     color='primary'
                     className='font-serif text-4xl font-semibold'
                  >
                     {course?.name}
                  </Typography>
                  <Typography>{course?.description}</Typography>
               </Box>
               <Box className='w-full md:w-1/2'>
                  <img src={course?.image} className='w-full' alt={course?.name + '_image'} />
               </Box>
            </Box>
            <Box className='my-10 rounded-md bg-secondary'>
               <Box className='p-4 space-y-4 overflow-hidden'>
                  {course?.lectures.map((lecture, index) => (
                     <Box
                        component={'article'}
                        key={lecture.id}
                        className='flex flex-col items-center justify-between px-5 py-2 transition-all rounded-md sm:flex-row bg-slate-200 hover:bg-purple-200'
                     >
                        <Box className='flex flex-col items-start w-full gap-2 md:items-center l md:gap-6 md:flex-row md:py-4'>
                           <Typography className='text-4xl md:text-6xl' color='primary'>
                              0{index + 1}
                           </Typography>
                           <Box>
                              <Typography className='text-xl font-medium md:text-xl'>
                                 {lecture.title}
                              </Typography>
                              <Typography className='inline-flex items-center gap-2 mt-2 text-sm sm:text-[1rem] text-slate-600'>
                                 <Clock className='size-4' /> {lecture.duration}
                              </Typography>
                           </Box>
                        </Box>
                        <Box className='flex items-end justify-end w-full h-full gap-4 my-4 sm:mt-0 md:items-center'>
                           <div>{lecture.completed && <CircleCheckBig />}</div>
                           <Link to={`/courses/${course.id}/${lecture.id}`}>
                              <Button variant='contained'>Learn</Button>
                           </Link>
                        </Box>
                     </Box>
                  ))}
               </Box>
            </Box>
         </Container>
      </Box>
   )
}

export default CoursePage
