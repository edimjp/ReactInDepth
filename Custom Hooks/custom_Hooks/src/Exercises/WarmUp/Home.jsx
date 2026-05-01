import { useState } from "react";
import useRerenderLogger from "./useRerenderLogger.jsx";

function Home() {
  const [count, setCount] = useState(0);
  useRerenderLogger();

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={handleCount}>Go Up</button>
    </>
  );
}

export default Home;
