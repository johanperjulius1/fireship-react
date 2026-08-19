// import { useReducer } from "react";

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, 0)

//   function reducer (state, action){
//     return state + action
//   }


//   return (
//     <>
//       {state}
//       <button onClick={() => dispatch(1)}>Add</button>
//       <button onClick={() => dispatch(-1)}>Decrease</button>
//     </>
//   );
// }

// export default Counter

import { useReducer } from "react";

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0)

  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return state + 1
        break;
      case "decrease":
        return state - 1
        break;
      default:
        return state;
    }
  }


  return (
    <>
      {state}
      <button onClick={() => dispatch({type: "increase"})}>Add</button>
      <button onClick={() => dispatch({type: "decrease"})}>Decrease</button>
    </>
  );
}

export default Counter