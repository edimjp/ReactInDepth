import { useReducer } from "react";

/*

function reducer(prevState, action) {
  console.log({ prevState }, { action });
  return prevState + action;
}

function App() {
  const [count, setCount] = useReducer(reducer, 0);

  function handleClick() {
    setCount(1);
  }

  return (
    <>
      <h1>count {count}</h1>
      <button onClick={handleClick}>Go up</button>
    </>
  );
}
  */

function reducer(prevState, action) {
  console.log({ prevState }, { action });

  switch (action.type) {
    case "up":
      return prevState + action.value;
    case "down":
      return prevState - action.value;
    case "reset":
      return 0;
    default:
      throw new Error("Invalid Action Type");
  }

  /*
  if (action.type === "up") return prevState + action.value;
  if (action.type === "down") return prevState - action.value;
  if (action.type === "reset") return 0;
  else throw new Error("Invalid Action Type");
  
*/
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  function goUp() {
    dispatch({ type: "up", value: 1 });
  }
  function goDown() {
    dispatch({ type: "down", value: 1 });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={goDown}>Go down</button>
      <button onClick={goUp}>Go Up</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
