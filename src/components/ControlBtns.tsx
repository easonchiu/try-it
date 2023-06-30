/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 12:26:10
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 12:31:18
 * @Description: 
 */
import useCountStore from "../store/store"

function ControlBtns() {
  console.log('control btns render')

  const add = useCountStore(state => state.add)
  return <button onClick={add}>Add</button>
}

export default ControlBtns
