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
}
