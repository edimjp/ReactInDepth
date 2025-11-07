import { useState, useEffect } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setcount2] = useState(10);

  // useEffect(() => {
  //   console.log("Runs only on Mount!");
  //   return () => {
  //     console.log("Runs when rerendering this Mount");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("Runs every Render or Rerender");
  //   return () => {
  //     console.log("Clean up when unmounting rerender");
  //   };
  // });

  // useEffect(() => {
  //   console.log("Runs based on the dependency Array");
  //   return () => {
  //     console.log("Runs when rerendering this dependency count1");
  //   };
  // }, [count1]);

  // useEffect(() => {
  //   console.log("Runs based on the dependcy Array");
  //   return () => {
  //     console.log("Runs when rerendering this dependency count2");
  //   };
  // }, [count2]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);

    const id = setInterval(() => {
      console.log(random);
    }, 1000);

    return () => {
      clearInterval(id); //clean up the previous interval before mounting
    };
  });

  return (
    <>
      <h1>App</h1>
      <p>{count1}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        +
      </button>

      <p> Count2: {count2}</p>
      <button
        onClick={() => {
          setcount2(count2 * 2);
        }}
      >
        x
      </button>
    </>
  );
}

export default App;
