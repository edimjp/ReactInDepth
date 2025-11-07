import { useReducer } from "react";
function reducer(prevState, action) {
  if (action.type === "Down") {
    return prevState - action.value;
  } else if (action.type === "Up") {
    return prevState + action.value;
  } else if (action.type === "Reset") {
    return 0;
  } else {
    throw new Error("Invalid Action Type");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  function handleDown() {
    dispatch({ type: "Down", value: 1 });
  }

  function handleUp() {
    dispatch({ type: "Up", value: 1 });
  }

  function handleReset() {
    dispatch({ type: "Reset" });
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleDown}>Down</button>
      <button onClick={handleUp}>Up</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;
