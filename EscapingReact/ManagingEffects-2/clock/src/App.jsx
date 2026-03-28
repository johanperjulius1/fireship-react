import * as React from "react";
import "./App.css"

// export default function Clock() {
//   const [time, setTime] = React.useState(null);

//   React.useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(id)
//   },[]
//   )

//   if (time === null) return null;

//   return (
//     <section>
//       <h1>Current Time</h1>
//       <p>{time.toLocaleTimeString()}</p>
//     </section>
//   );
// }

export default function Clock() {
  const [time, setTime] = React.useState(null)

  React.useEffect(() => {
    const id = setInterval(() => setTime(new Date()) ,1000)

    return () => clearInterval(id)
  }, [])

  if(time === null) return <p>loading...</p>

  return (
    <section>
      current time is: {time.toLocaleTimeString()}
    </section>
  )
}