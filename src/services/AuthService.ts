import { User } from '@/models/user'

export class AuthService {
   static async register(name: string, username: string, password: string): Promise<User> {
      const newUser = new User(Date.now(), name, username, password)
      newUser.saveToLocalStorage()
      return newUser
   }

   static async login(username: string, password: string): Promise<User | null> {
      const user = User.loadFromLocalStorage()
      if (user && user.username === username && (await user.verifyPassword(password))) {
         return user
      }
      return null
   }

   static logout(): void {
      localStorage.removeItem('currentUser')
   }

   static getCurrentUser(): User | null {
      return User.loadFromLocalStorage()
   }
}
