import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.count("click")
    setCount(count)
  }

  // let count = 0;

  // function handleClick() {
  //   count++;
  //   console.log(count);
  // }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
}