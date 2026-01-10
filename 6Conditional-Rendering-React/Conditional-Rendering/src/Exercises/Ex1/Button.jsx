import { useState } from "react";

function Button() {
  const [bool, setBool] = useState(true);

  const buttonText = bool ? "Loading" : "Click me!";

  function toggleBool() {
    bool ? setBool(false) : setBool(true);
  }

  return (
    <>
      <button>{buttonText}</button>
      <button onClick={toggleBool}>toggleBool</button>
    </>
  );
}
export default Button;
