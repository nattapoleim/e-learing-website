import { Lecture } from '@/models/lecture'

export class Course {
   id: number
   name: string
   description: string
   category: string
   lectures: Lecture[]

   constructor(id: number, name: string, description: string, category: string) {
      this.id = id
      this.name = name
      this.description = description
      this.category = category
      this.lectures = []
   }

   addLecture(lecture: Lecture) {
      this.lectures.push(lecture)
   }

   static async fetchCourse(id: number): Promise<Course | undefined> {
      try {
         const res = await fetch(import.meta.env.VITE_API_URL + '/courses/' + id)
         const courseData: Course = await res.json()
         const currentCourse = new Course(
            courseData.id,
            courseData.name,
            courseData.description,
            courseData.category,
         )
         courseData.lectures.map(lecture =>
            currentCourse.addLecture(new Lecture(lecture.id, lecture.title, lecture.duration)),
         )
         return currentCourse
      } catch (error) {
         console.error('Error fetch course : ', error)
      }
   }
}
