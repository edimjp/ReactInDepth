import { useContext } from "react";
import { ctx } from "./Parent.jsx";

function Child() {
  const [anyString, setAnyString] = useContext(ctx);

  function HandleClick() {
    setAnyString(
      "I just clocked 27 years old, This code was written on the 22/11/2025"
    );
  }
  return (
    <>
      <h1>{anyString}</h1>
      <button onClick={HandleClick}>Change String</button>
    </>
  );
}
export default Child;
