/*
    1. Create a new Vite React project

    2. Create an Input.jsx file that has a component
       that returns an <input id="ex1" /> element

    3. Make it so that when you type in the input, you
       log out: [INPUT id=ex1]: input_value
       where input_value is the actual text inside
       the input box (on change/input)

    4. Export this function and replace <App /> in the
       main.jsx file with this imported Input component

    5. Check in your Browser to see if it works as expected
*/

function Input() {
  function HandleInput(e) {
    const tagName = e.target.tagName;
    const id = e.target.getAttribute("id");
    const value = e.target.value;
    console.log(`[${tagName} id=${id}: ${value}]`);
  }

  return <input id="ex1" type="text" onInput={HandleInput} />;
}

export default Input;
