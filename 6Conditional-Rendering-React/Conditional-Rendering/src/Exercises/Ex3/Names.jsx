import { useState } from "react";

function Names() {
  const [names, setNames] = useState([]);
  const [inputName, setInputName] = useState("");

  function handleClick() {
    setNames([...names, inputName]);
    setInputName("");
    console.log(names);
  }

  function handleChange(e) {
    setInputName(e.target.value);
  }

  const filteredName = names
    .filter((name) => name.startsWith("A"))
    .map((name) => <p>{name}</p>);

  return (
    <>
      <input type="text" value={inputName} onChange={handleChange} />{" "}
      {/*value property is to sync the input value with what is on the screen*/}
      <button onClick={handleClick}>Submit</button>
      {filteredName}
    </>
  );
}

export default Names;
