import useMyPageStore from "./store/createStore"
import { mergeFooBarSelector } from "./store/selectors"

function MyPage() {
  const foobar = useMyPageStore(mergeFooBarSelector)

  const {do1, do2, do3} = useMyPageStore(state => {
    return { do1: state.do1, do2: state.do2, do3: state.do3 }
  })

  return (
    <div>
      <p>{foobar}</p>

      <button onClick={do1}>do1</button>
      <button onClick={do2}>do2</button>
      <button onClick={do3}>do3</button>
    </div>
  )
}

export default MyPage
