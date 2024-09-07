import { User } from '@/models/user'
import { create } from 'zustand'

type Store = {
   user: User | null
   setUser: (user: User | null) => void
   loadUser: () => Promise<void>
}

const useStore = create<Store>(set => ({
   user: null,
   setUser: user => set({ user }),
   loadUser: async () => {
      const user = await User.loadFromLocalStorage()
      return set({ user })
   },
}))

export default useStore
