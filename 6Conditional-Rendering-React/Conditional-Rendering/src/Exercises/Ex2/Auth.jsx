import { useState } from "react";

function Auth() {
  const [password, setPassword] = useState("");

  const paraText =
    password === "secret"
      ? "Successfully logged in!"
      : "Enter correct password.";

  function changeInput(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <input type="text" onInput={changeInput} />
      <p>{paraText}</p>
    </>
  );
}

export default Auth;
