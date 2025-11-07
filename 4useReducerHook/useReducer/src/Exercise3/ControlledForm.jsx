import { useReducer } from "react";

function reducer(state, action) {
  //   console.log(action);
  //   console.log(state);
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.inpValue.name]: action.inpValue.value };
    default:
      throw new Error("Invalid Action Type");
  }
}
const initialState = { name: "", email: "", age: "" };

function ControlledForm() {
  const [formInfo, dispatchValue] = useReducer(reducer, initialState);

  function handleForm(e) {
    e.preventDefault();
    // console.log(e);
    console.log(formInfo);
  }

  function handleChange(e) {
    // console.log(e.target.value);
    dispatchValue({
      type: "CHANGE",
      inpValue: { name: e.target.name, value: e.target.value },
    });
  }
  return (
    <>
      <form onSubmit={handleForm} onChange={handleChange}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="number" name="age" placeholder="number" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledForm;
