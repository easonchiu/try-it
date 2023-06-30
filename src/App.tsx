/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 11:00:36
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 14:08:56
 * @Description:
 */
import ControlBtns from './components/ControlBtns';
import Count from './components/Count';
import Count2 from './components/Count2';

function App() {
  console.log('<App /> render')

  return (
    <>
      <Count />
      <ControlBtns />

      <Count2 />
    </>
  );
}

export default App;
