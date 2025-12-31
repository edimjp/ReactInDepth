import Child from "./Child.jsx";
import { createContext } from "react";

const firtsContext = createContext();
const secondContext = createContext();
const num = 12345;
const string = "String";

function Parent() {
  return (
    <>
      <firtsContext.Provider value={num}>
        <secondContext.Provider value={string}>
          <Child />
        </secondContext.Provider>
      </firtsContext.Provider>
    </>
  );
}

export default Parent;
export { firtsContext, secondContext };
