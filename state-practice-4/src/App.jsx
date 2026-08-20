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


  return (
    <div>
      <p>Hello from app. Time is {seconds}</p>
      <button onClick={handleToggle}>{isRunning ? "stop" : "start"}</button>
    </div>
  )
}

export default App
