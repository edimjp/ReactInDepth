import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const DecrementHandler = () => {
    setCount(count - 1);
  };

  const IncrementHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={DecrementHandler}>-</button>
      <button onClick={IncrementHandler}>+</button>
    </>
  );
}

export default Counter;
