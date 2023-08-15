/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 12:26:10
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 14:09:47
 * @Description: 
 */
import useCountStore from "../store/store"

function ControlBtns() {
  const add = useCountStore(state => state.add)
  const subtract = useCountStore(state => state.subtract)
  const clear = useCountStore(state => state.clear)

  return (
    <>
      <button onClick={add}>Add</button>
      {' '}
      <button onClick={subtract}>Subtract</button>
      {' '}
      <button onClick={clear}>Clear</button>
    </>
  )
}

export default ControlBtns
