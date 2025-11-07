function Button({ setTextLogin }) {
  function handleClick() {
    setTextLogin((prevText) => {
      if (prevText === "Logged In") {
        return "Logged Out";
      } else return "Logged In";
    });
  }

  return <button onClick={handleClick}>Toggle Button</button>;
}

export default Button;
