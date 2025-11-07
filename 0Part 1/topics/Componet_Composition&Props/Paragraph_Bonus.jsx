function Paragraph_Bonus(props) {
  //   console.log(props);
  return (
    <>
      <p>{props.text}</p>
      {props.children}
    </>
  );
}

export default Paragraph_Bonus;
