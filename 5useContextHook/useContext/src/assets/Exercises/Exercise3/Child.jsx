import { useContext } from "react";
import { counterContext } from "./Parent.jsx";

function Child() {
  const parentDispatch = useContext(counterContext);
  function dispatchCounter() {
    parentDispatch({ type: "UP", value: 1 });
  }
  return (
    <>
      <button onClick={dispatchCounter}>Go up</button>
    </>
  );
}

export default Child;
