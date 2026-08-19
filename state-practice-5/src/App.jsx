import { useState, useEffect } from "react";

function App() {

  const [state, setState] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning === true) {
      const id = setInterval(() => {
        setState(s => s + 1)
      }, 1000)

      return () => clearInterval(id)
    }
  }, [isRunning])

  const handleToggle = () => {
    setIsRunning(isRunning => !isRunning)
  }

  return (
    <div>
      {state}
      <button onClick={handleToggle} >{isRunning ? "Stop" : "Start"}</button>
    </div>
  )
}

export default App;