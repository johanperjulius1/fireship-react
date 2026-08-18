// import { useState, useEffect } from "react"

// function App() {
//   const [seconds, setSeconds] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSeconds(seconds => seconds + 1)
//     }, 1000)

//     return () => clearInterval(id)
//   }, [])


//   return (<>
//     <div>Hello from app. Time is {seconds}</div>
//   </>)
// }

// export default App

import { useState, useEffect, useRef } from "react"

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning]= useState(false)
  const idRef = useRef(null)

  const handleToggle = () => {
    if (isRunning) {
      clearInterval(idRef.current)
      idRef.current = null
      setIsRunning(false)
    } else {
      idRef.current = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
      setIsRunning(true)
    }
  }

  useEffect(() => {
    return () => clearInterval(idRef.current)
  }, [])

  return (
    <div>
      <p>Hello from app. Time is {seconds}</p>
      <button onClick={handleToggle}>{isRunning ? "stop" : "start"}</button>
    </div>
  )
}

export default App
