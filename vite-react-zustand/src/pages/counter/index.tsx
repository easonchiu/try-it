import ControlBtns from './components/ControlBtns';
import Count from './components/CountA';
import Count2 from './components/CountB';

function PageCounter() {
  return (
    <div>
      <h2>Counter</h2>

      <Count />
      <ControlBtns />

      <Count2 />
    </div>
  );
}

export default PageCounter;
