function Button({ loading }) {
  const buttonText = loading ? "Loading..." : "Click me!";

  return <button>{buttonText}</button>;
}
export default Button;
