import { create } from "zustand"

export interface IStore {
  countA: number
  countB: number

  addCountA: () => void
  subtractCountA: () => void
  clearCountA: () => void

  addCountB: () => void
  asyncAddCountB: () => void

  clearAllCount: () => void
}

const useCountStore = create<IStore>((set) => {
  return {
    countA: 1,
    countB: 10000,

    addCountA: () => set(state => {
      return { countA: state.countA + 1 }
    }),

    subtractCountA: () => set(state => {
      return { countA: state.countA - 1 }
    }),

    clearCountA: () => set({ countA: 0 }),

    addCountB: () => set(state => {
      return { countB: state.countB + 1 }
    }),

    asyncAddCountB: () => {
      setTimeout(() => {
        set(state => ({ countB: state.countB + 1 }))
      }, 2000)
    },

    clearAllCount: () => set({ countA: 0, countB: 0 }),
  }
})

export default useCountStore
