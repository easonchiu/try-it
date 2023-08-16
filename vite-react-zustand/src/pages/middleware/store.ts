import { create } from "zustand"
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

export interface IStore {
  count: number

  addCount: () => void
  subtractCount: () => void
}

const useCountStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        count: 1,

        addCount: () => set(state => {
          return { count: state.count + 1 }
        }),

        subtractCount: () => set(state => {
          return { count: state.count - 1 }
        }),
      }),
      {
        name: 'my-count',
        storage: createJSONStorage(() => window.sessionStorage),
      }
    )
  )
)

export default useCountStore
