import { useState, useReducer } from "react"

function reducer (state, action){
  switch (action.type){
    case "increment":
      return state + 1

    case "decrement":
      return state - 1

    default:
        return state;
  }
}

export default function Counter() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, 0)

  // const handleIncrement = () => {
  //   setCount(count => count + 1)
  // }

  // const handleDecrement = () => {
  //   setCount(count => count - 1)
  // }

  // let count = 0;

  // function handleClick() {
  //   count++;
  //   console.log(count);
  // }

  return (
    <>
      {/* <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button> */}

      <p>{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      
    </>
  );
}