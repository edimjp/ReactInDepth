import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");
  const [submit, setSubmit] = useState("");

  function FirstNameHandler(e) {
    setFirstName(e.target.value);
  }

  function LastNameHandler(e) {
    setLastName(e.target.value);
  }

  function EmailNameHandler(e) {
    setEmailName(e.target.value);
  }

  function FormSubmitHandler(e) {
    e.preventDefault();
    setSubmit(`FirstName: ${firstName} LastName: ${lastName} Email: ${email}`);
    setFirstName("");
    setLastName("");
    setEmailName("");
  }
  return (
    <>
      <form action="" onSubmit={FormSubmitHandler}>
        <input
          type="text"
          name="firstName"
          onInput={FirstNameHandler}
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          onInput={LastNameHandler}
          value={lastName}
        />
        <input
          type="text"
          name="email"
          onInput={EmailNameHandler}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>{submit}</h1>
    </>
  );
}

export default Form;
