import useCountStore from "../store"

function ControlBtns() {
  const addCountA = useCountStore(state => state.addCountA)
  const subtractCountA = useCountStore(state => state.subtractCountA)
  const clearCountA = useCountStore(state => state.clearCountA)

  return (
    <>
      <button onClick={addCountA}>Add CountA</button>
      {' '}
      <button onClick={subtractCountA}>Subtract CountA</button>
      {' '}
      <button onClick={clearCountA}>Clear CountA</button>
    </>
  )
}

export default ControlBtns
