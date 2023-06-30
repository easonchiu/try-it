import './App.css'
import { create } from 'zustand'

interface Store {
  count: number
  inc: () => void
  clear: () => void
}

const useMyStore = create<Store>((set) => {
  return {
    count: 1,
    inc: () => set(state => {
      return { count: state.count + 1 }
    }),
    clear: () => set({ count: 0 })
  }
})

function App() {
  const count = useMyStore(s => s.count)
  const {inc, clear} = useMyStore()


  return (
    <>
      <div onClick={inc}>{count}</div>
      <div onClick={clear}>clear</div>
    </>
  )
}

export default App


