import { useReducer } from "react";
import Button from "./Button";

function reducer(state, action) {
  switch (action.type) {
    case "UP":
      return state + action.value;
    case "DOWN":
      return state - action.value;
    case "RESET":
      return 0;
    default:
      throw new Error("Invalid Action Type");
  }
}

function Counter() {
  const [count, dispatchCount] = useReducer(reducer, 0);

  function UP() {
    dispatchCount({ type: "UP", value: 1 });
  }

  function DOWN() {
    dispatchCount({ type: "DOWN", value: 1 });
  }

  function RESET() {
    dispatchCount({ type: "RESET" });
  }

  return (
    <>
      <h1>{count}</h1>
      <Button text={"Go Up"} handleFunctions={UP} />
      <Button text={"Go DOWN"} handleFunctions={DOWN} />
      <Button text={"RESET"} handleFunctions={RESET} />
    </>
  );
}

export default Counter;
