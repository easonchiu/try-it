/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 11:02:39
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 12:30:38
 * @Description:
 */
import { ReactNode } from "react"
import useCountStore from "../store/store"

function Counter(): ReactNode {
  console.log('couter render')

  const count = useCountStore(state => state.count)
  return <div>{count}</div>
}

export default Counter;
