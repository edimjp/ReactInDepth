import { useContext } from "react";
import { State } from "./Parent.jsx";

function Child() {
  const CtxState = useContext(State);
  return (
    <>
      <h1>{CtxState}</h1>
    </>
  );
}

export default Child;
