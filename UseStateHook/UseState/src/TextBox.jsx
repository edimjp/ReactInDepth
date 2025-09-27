import { useState } from "react";

function TextBox() {
  const [text, setText] = useState("");

  function TextHandler(e) {
    setText(e.target.value);
  }

  return (
    <>
      <h1>{text}</h1>
      <input type="text" onInput={TextHandler} />
    </>
  );
}

export default TextBox;
