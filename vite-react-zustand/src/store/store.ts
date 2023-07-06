/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 11:04:10
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 14:24:06
 * @Description: 
 */
import { create } from "zustand"

interface IStore {
  count: number
  count2: number
  add: () => void
  subtract: () => void
  clear: () => void
  add2: () => void
  clearAll: () => void
  asyncAdd: () => void
  promiseAdd: () => Promise<void>
}

const useCountStore = create<IStore>(set => {
  return {
    count: 1,
    count2: 10,
    add: () => set(state => {
      return { count: state.count + 1 }
    }),
    subtract: () => set(state => {
      return { count: state.count - 1 }
    }),
    clear: () => set({ count: 0 }),
    add2: () => set(state => {
      return { count2: state.count2 + 1 }
    }),
    clearAll: () => set({ count: 0, count2: 0 }),
    asyncAdd: () => {
      setTimeout(() => {
        set(state => ({ count2: state.count2 + 1 }))
      }, 2000)
    },
    promiseAdd: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          set(state => ({ count2: state.count2 + 1 }))
          resolve()
        }, 2000)
      })
    }
  }
})

export default useCountStore
