import bcrypt from 'bcryptjs'

export class User {
   id: number
   name: string
   username: string
   private passwordHash: string = ''

   constructor(id: number, name: string, username: string, password: string) {
      this.id = id
      this.name = name
      this.username = username
      bcrypt.hash(password, 10).then(hash => {
         this.passwordHash = hash
      })
   }

   async verifyPassword(password: string): Promise<boolean> {
      return await bcrypt.compare(password, this.passwordHash)
   }

   saveToLocalStorage(): void {
      const userData = {
         id: this.id,
         name: this.name,
         username: this.username,
         passwordHash: this.passwordHash,
      }
      localStorage.setItem('currentUser', JSON.stringify(userData))
   }

   static loadFromLocalStorage(): User | null {
      const userData = localStorage.getItem('currentUser')
      if (userData) {
         const { id, name, username, passwordHash } = JSON.parse(userData)
         const user = new User(id, name, username, '')
         user.passwordHash = passwordHash
         return user
      }
      return null
   }
}
