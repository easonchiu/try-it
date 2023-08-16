import useCountStore from './store';

function PageMiddleware() {
  const count = useCountStore(state => state.count);

  const { add, subtract } = useCountStore(state => {
    return {
      add: state.addCount,
      subtract: state.subtractCount
    }
  })

  const clear = () => useCountStore.setState({ count: 0 })

  return (
    <div>
      <h2>Middleware</h2>
      <p>count value: {count}</p>
      <div>
        <button style={{ marginRight: '10px' }} onClick={add}>Add</button>
        <button style={{ marginRight: '10px' }} onClick={subtract}>Substrict</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default PageMiddleware;
