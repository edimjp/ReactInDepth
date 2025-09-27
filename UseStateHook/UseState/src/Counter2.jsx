import { useState } from "react";
function Counter2() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}

export default Counter2;
