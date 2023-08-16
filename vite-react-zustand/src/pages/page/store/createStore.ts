import { create } from "zustand"
import initialState, { MyPageState } from "./initialState"

interface MyPageActions {
  do1: () => void
  do2: () => void
  do3: () => void
}

const useMyPageStore = create<MyPageState & MyPageActions>((set, get) => {
  return {
    ...initialState,

    // do1.....
    do1() {
      set(state => ({
        foo: state.foo + '...'
      }))
    },
    
    // do2.....
    do2() {
      set(state => ({
        bar: state.bar + '+++'
      }))
    },

    // do3....
    do3() {
      const {do1, do2} = get()

      do1()
      
      if (get().foo.length < 10) {
        do2()
      }
    }
  }
})

export default useMyPageStore
