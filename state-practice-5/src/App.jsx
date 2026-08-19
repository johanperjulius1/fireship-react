import { useState, useEffect, useRef } from "react"

// export default function App() {
//   const [state, setState] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)

//   const handleToggle = () => {
//     setIsPlaying((p) => !p)
//   }

//   useEffect(() => {
//     if (!isPlaying) return; 

//     const id = setInterval(() => {
//       setState((s) => s + 1)
//     }, 1000)


//     return () => clearInterval(id)
//   }, [isPlaying])

//   return (<div>

//     {state}
//     <button onClick={handleToggle}>{isPlaying ? "Pause" : "Play"}</button>
//   </div>)
// }

function App (){
  const idRef = useRef(null)
  const [state, setState] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleToggle = () => {
    if(isPlaying === false){
      setIsPlaying(true)
      idRef.current = setInterval(() => {
        setState(state => state + 1)
      },1000)
    } else {
      clearInterval(idRef.current)
      setIsPlaying(false)
    }
  }

  useEffect(() =>{

    return clearInterval(idRef.current)
  },[])

  return(
    <div>
      {state}
      <button onClick={handleToggle}>{isPlaying ? "Pause": "Play"}</button>
    </div>
  )
}

export default App;