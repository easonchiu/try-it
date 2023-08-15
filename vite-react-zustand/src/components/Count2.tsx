import useCountStore from '../store/store';

/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 12:27:38
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 14:24:42
 * @Description:
 */
function Count2() {
  const count2 = useCountStore(state => state.count2);
  const add2 = useCountStore(state => state.add2);
  const asyncAdd = useCountStore(state => state.asyncAdd);
  const promiseAdd = useCountStore(state => state.promiseAdd);
  const clearAll = useCountStore(state => state.clearAll);

  return (
    <div>
      <p>count2 value: {count2}</p>
      <button onClick={add2}>Add2</button>
      {' '}
      <button onClick={asyncAdd}>Async Add</button>
      {' '}
      <button onClick={promiseAdd}>Promise Add</button>
      {' '}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default Count2;
