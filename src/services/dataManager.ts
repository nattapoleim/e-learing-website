import { Category } from '@/models/category'
import { Course } from '@/models/course'
import { Lecture } from '@/models/lecture'
import { User } from '@/models/user'

export class DataManager {
   courses: Course[]
   categories: Category[]
   currentUser: User | null

   constructor() {
      this.courses = []
      this.categories = []
      this.currentUser = null
   }

   async fetchCourse(): Promise<void> {
      const res = await fetch(import.meta.env.VITE_API_URL + '/courses')
      const coursesData: Course[] = await res.json()
      this.courses = coursesData.map(course => {
         const curCourse = new Course(course.id, course.name, course.description, course.category)
         course.lectures.map(lecture =>
            curCourse.addLecture(new Lecture(lecture.id, lecture.title, lecture.duration)),
         )
         return curCourse
      })
   }

   async fetchCategories(): Promise<void> {
      const res = await fetch(import.meta.env.VITE_API_URL + '/categories')
      const categoriesData: string[] = await res.json()
      this.categories = categoriesData.map((name, index) => new Category(index + 1, name))
   }

   getCourseByCategory(categoryName: string): Course[] {
      return this.courses.filter(course => course.category === categoryName)
   }
}
