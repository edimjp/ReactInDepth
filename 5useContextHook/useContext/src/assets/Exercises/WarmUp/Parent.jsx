import { createContext } from "react";
import Child from "./Child.jsx";

const State = createContext();
const contextState = " I Love Monkeys!";
function Parent() {
  return (
    <>
      <State.Provider value={contextState}>
        <Child />
      </State.Provider>
    </>
  );
}

export default Parent;
export { State };
