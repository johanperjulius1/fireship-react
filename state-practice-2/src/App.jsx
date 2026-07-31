import { useReducer } from "react"

function reducer (state, value){
  const nextState = state + value

  console.log(
    `Reducer invoked. state: ${state}, value: ${value}, nextState: ${nextState}`
  )
  
  return nextState
}

const initialState = 0

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncrement = () => {
    dispatch(1)
  }

  return (
    <>
      {state}
      {/* <button onClick = {() => dispatch(1)}>+</button> */}

      <button onClick = {handleIncrement}>+</button>

      {/* <button>-</button> */}
      
    </>
  )
}


export default App