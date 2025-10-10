import { useRef, useState } from "react";
function Form_Ex3() {
  const formRef = useRef(null);
  const [pText, setPtext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let pTextValue = "";
    for (const [key, value] of formData) {
      pTextValue += `${key}: ${value} `;
    }
    setPtext(pTextValue.trim());
  };

  return (
    <>
      <form action="" ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="number" name="age" placeholder="age" />
        <button type="submit">Submit</button>
      </form>
      <p>{pText}</p>
    </>
  );
}

export default Form_Ex3;
