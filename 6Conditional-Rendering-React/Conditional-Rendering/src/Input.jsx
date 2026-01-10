import { useState } from "react";

function Input() {
  const [animal, setAnimal] = useState("");
  function inputValue(e) {
    // console.log(e.target.value);
    setAnimal(e.target.value);
  }

  function renderedValue() {
    switch (animal) {
      case "Meow!":
        return <h1>🐱</h1>;
      case "Kikiki":
        return <h1>🐀</h1>;
      case "Whoof!":
        return <h1>🐶</h1>;

      default:
        return null;
    }
  }

  return (
    <>
      <label htmlFor="inputMeow!">Meow!</label>
      <input
        type="radio"
        name="animal"
        value={"Meow!"}
        id="inputMeow!"
        onClick={inputValue}
      />
      <label htmlFor="inputKikiki">Kikiki</label>
      <input
        type="radio"
        name="animal"
        value={"Kikiki"}
        id="inputKikiki"
        onClick={inputValue}
      />
      <label htmlFor="inputWhoof!">Whoof!</label>
      <input
        type="radio"
        name="animal"
        value={"Whoof!"}
        id="inputWhoof!"
        onClick={inputValue}
      />
      {renderedValue()}
    </>
  );
}
export default Input;
