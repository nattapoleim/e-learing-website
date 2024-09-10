import CategoriesComponent from '@/components/CategoriesComponent'
import CourseList from '@/components/CourseList'
import Hero from '@/components/Hero'
import { Category } from '@/models/category'
import { Course } from '@/models/course'
import { DataManager } from '@/services/dataManager'
import { useEffect, useState } from 'react'

const dataManager = new DataManager()

function HomePage() {
   const [courses, setCourses] = useState<Course[]>([])
   const [categories, setCategories] = useState<Category[]>([])
   const [selectedCategory, setSelectedCategory] = useState<string>('')

   useEffect(() => {
      const fetchData = async () => {
         try {
            await dataManager.fetchCourse()
            await dataManager.fetchCategories()
            setCourses(dataManager.courses)
            setCategories(dataManager.categories)
         } catch (error) {
            console.error('Error Fetching Data from API :', error)
         }
      }
      fetchData()
   }, [])

   const handleCategoryChange = (categoryName: string) => {
      setSelectedCategory(categoryName)
      if (categoryName) {
         setCourses(dataManager.getCourseByCategory(categoryName))
      } else {
         setCourses(dataManager.courses)
      }

      console.log(selectedCategory)
   }

   return (
      <section className=''>
         <Hero />
         <CategoriesComponent categories={categories} handleCategoryChange={handleCategoryChange} />
         <CourseList courses={courses} />
      </section>
   )
}

export default HomePage
