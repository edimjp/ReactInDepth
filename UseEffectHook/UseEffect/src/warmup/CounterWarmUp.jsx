import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const HandleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Counter state changed");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={HandleClick}>+</button>
    </>
  );
}

export default Counter;
