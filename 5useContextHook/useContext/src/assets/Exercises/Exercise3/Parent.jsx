import { createContext, useReducer } from "react";
import Child from "./Child.jsx";
const counterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "UP":
      return state + action.value;

    default:
      throw new Error("Invalid Action Type");
  }
}

function Parent() {
  const [counter, dispatchCounter] = useReducer(reducer, 0);
  return (
    <>
      <h1>{counter}</h1>
      <counterContext.Provider value={dispatchCounter}>
        <Child />
      </counterContext.Provider>
    </>
  );
}
export default Parent;
export { counterContext };
