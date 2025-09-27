import Header_Ex2 from "./Header_Ex2.jsx";
import Button from "./Button_Ex2.jsx";

function Section_Ex2() {
  function handleClick() {
    console.log("Boo!");
  }

  return (
    <>
      <Header_Ex2 text="Excercise 2" />
      <Button text={"Click Me"} handleClick={handleClick} />
    </>
  );
}

export default Section_Ex2;
