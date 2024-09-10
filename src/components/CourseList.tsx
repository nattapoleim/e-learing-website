import { Course } from '@/models/course'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

type CourseListProps = {
   courses: Course[]
}

function CourseList({ courses }: CourseListProps) {
   return (
      <Box className='p-4 md:p-10'>
         <h3 className='mb-4 font-serif text-3xl font-semibold text-center uppercase '>Courses</h3>
         <div className='grid w-full gap-4 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
            {courses?.map(course => (
               <Card
                  key={course.id}
                  sx={{ 'transition': '0.3s all', '&:hover': { scale: '105%' } }}
               >
                  <CardMedia
                     className='h-[14rem] object-contain'
                     image={course.image}
                     title={course.name}
                  />
                  <CardContent className='p-4'>
                     <Typography gutterBottom variant='h5' component='div'>
                        {course.name}
                     </Typography>
                     <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                        {course.description}
                     </Typography>
                  </CardContent>
                  <CardActions className='p-4 mt-auto'>
                     <RouterLink to={`/courses/${course.id}`} className='ml-auto'>
                        <Button variant='contained'>Go to course</Button>
                     </RouterLink>
                  </CardActions>
               </Card>
            ))}
         </div>
      </Box>
   )
}

export default CourseList
