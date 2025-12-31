import { useContext } from "react";
import { firtsContext, secondContext } from "./Parent.jsx";

function Child() {
  const firtsCtxValue = useContext(firtsContext);
  const secondCtxValue = useContext(secondContext);
  return (
    <>
      <p>{firtsCtxValue}</p>
      <p>{secondCtxValue}</p>
    </>
  );
}

export default Child;
