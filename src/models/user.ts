import bcrypt from 'bcryptjs'

export class User {
   id: number
   name: string
   username: string
   private passwordHash: string = ''

   private constructor(id: number, name: string, username: string, passwordHash: string) {
      this.id = id
      this.name = name
      this.username = username
      this.passwordHash = passwordHash
   }

   static async create(id: number, name: string, username: string, password: string) {
      const passwordHash = await bcrypt.hash(password, 10)
      return new User(id, name, username, passwordHash)
   }

   async verifyPassword(password: string): Promise<boolean> {
      return await bcrypt.compare(password, this.passwordHash)
   }

   toJSON() {
      return {
         id: this.id,
         name: this.name,
         username: this.username,
         passwordHash: this.passwordHash,
      }
   }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   static async fromJSON(data: any): Promise<User> {
      return new User(data.id, data.name, data.username, data.passwordHash)
   }

   saveToLocalStorage(): void {
      const userData = this.toJSON()
      localStorage.setItem('currentUser', JSON.stringify(userData))
   }

   static async loadFromLocalStorage(): Promise<User | null> {
      const userData = localStorage.getItem('currentUser')
      if (userData) {
         const data = JSON.parse(userData)
         return User.fromJSON(data)
      }
      return null
   }

   static async loadUsersFromLocalStorage(): Promise<User[]> {
      const usersData = localStorage.getItem('users')
      if (usersData) {
         const usersJSON = JSON.parse(usersData)
         return Promise.all(usersJSON.map(User.fromJSON))
      }
      return []
   }
}
