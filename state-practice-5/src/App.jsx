import { useState, useEffect, useRef } from "react"

function App() {
  const [state, setState] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleToggle = () => {
    setIsPlaying(isPlaying => !isPlaying)
  }

  useEffect(() => {
    if(isPlaying === true){
      const id = setInterval(() => {
        setState(state => state + 1)
      }, 1000)
      
          return () => {
            clearInterval(id)
          }
    }
  }, [isPlaying])

  return (
    <div>
      {state}
      <button onClick={handleToggle}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  )
}

export default App;