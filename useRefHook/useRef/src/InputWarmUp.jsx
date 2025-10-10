import { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  function Ifocus() {
    // const input = document.querySelector("input");
    // input.focus();
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={Ifocus}>Focus</button>
    </>
  );
}

export default Input;
