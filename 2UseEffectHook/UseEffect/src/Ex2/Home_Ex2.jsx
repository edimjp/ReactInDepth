import { useState, useEffect } from "react";
import Section_Ex2 from "./Section_Ex2";

function Home_Ex2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Home has re-rendered");
  });

  return (
    <>
      <h1>Visits: {count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
      <Section_Ex2 />
    </>
  );
}

export default Home_Ex2;
