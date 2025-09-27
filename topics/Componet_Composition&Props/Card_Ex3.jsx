import Button_Ex3 from "./Button_Ex3";
function Card_Ex3({ cardText, buttonText, buttonClick }) {
  return (
    <>
      <h2>{cardText}</h2>
      <Button_Ex3 text={buttonText} treatClick={buttonClick} />
    </>
  );
}

export default Card_Ex3;
