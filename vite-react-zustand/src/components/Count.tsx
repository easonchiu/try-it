/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 11:02:39
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 14:08:25
 * @Description:
 */
import { ReactNode } from 'react';
import useCountStore from '../store/store';

function Count(): ReactNode {
  const count = useCountStore(state => state.count);
  return <p>count value: {count}</p>;
}

export default Count;
