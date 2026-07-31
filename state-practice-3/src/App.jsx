function Counter() {
  let count = 0;
  console.log("button is rerendered")

  return (
    <button onClick={() => count++}>
      {count}
    </button>
  );
}

export default Counter