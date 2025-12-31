import { createContext, useState } from "react";
import Child from "./Child.jsx";

const ctx = createContext();
function Parent() {
  const [anyString, setAnyString] = useState("My name is Edim");
  return (
    <>
      <ctx.Provider value={[anyString, setAnyString]}>
        <Child />
      </ctx.Provider>
    </>
  );
}
export default Parent;
export { ctx };
