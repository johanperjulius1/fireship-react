import { useState, useEffect } from "react"
import Slider from "./components/Slider"


export function App() {
  const [count, setCount] = useState(0)
  const [sliderInput, setSliderInput] = useState(1)

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((count) => count + sliderInput);
    }, 1000);
    
    return () => window.clearInterval(id);
  }, [sliderInput]);

  const handleAddition = () => {
    setCount(count => count + sliderInput)
  }

  const handleDecrease = () => {
    setCount(count => count - sliderInput)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <Slider value={sliderInput} onChange={setSliderInput} />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      {count}
    </>
  )
}

export default App