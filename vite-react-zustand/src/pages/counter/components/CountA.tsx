import { ReactNode } from 'react';
import useCountStore from '../store';


function CountA(): ReactNode {
  const countA = useCountStore(state => state.countA);

  return <p>countA value: {countA}</p>;
}

export default CountA;
