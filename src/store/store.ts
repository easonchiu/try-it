import { create } from "zustand"

interface IStore {
  count: number
  add: () => void
  subtract: () => void
  clear: () => void
}

const useCountStore = create<IStore>(set => {
  return {
    count: 1,
    add: () => set(state => {
      return { count: state.count + 1 }
    }),
    subtract: () => set(state => {
      return { count: state.count - 1 }
    }),
    clear: () => set({ count: 0 })
  }
})

export default useCountStore
