import useCountStore from '../store';

function CountB() {
  const countB = useCountStore(state => state.countB);

  const addCountB = useCountStore(state => state.addCountB);
  const asyncAddCountB = useCountStore(state => state.asyncAddCountB);
  const clearAllCount = useCountStore(state => state.clearAllCount);

  return (
    <div>
      <p>countB value: {countB}</p>
      <button onClick={addCountB}>Add CountB</button>
      {' '}
      <button onClick={asyncAddCountB}>Async Add CountB</button>
      {' '}
      <button onClick={clearAllCount}>Clear All Count</button>
    </div>
  );
}

export default CountB;
