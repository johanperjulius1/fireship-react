import { useState, useReducer } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count => count + 1)
  }

  const handleDecrement = () => {
    setCount(count => count - 1)
  }

  // let count = 0;

  // function handleClick() {
  //   count++;
  //   console.log(count);
  // }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}