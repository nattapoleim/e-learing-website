export class Course {
   id: number
   name: string
   description: string
   category: string

   constructor(id: number, name: string, description: string, category: string) {
      this.id = id
      this.name = name
      this.description = description
      this.category = category
   }
}
