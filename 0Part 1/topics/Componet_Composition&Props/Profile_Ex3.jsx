import Card_Ex3 from "../Componet_Composition&Props/Card_Ex3.jsx";

function Profile_Ex3({ profileText, cText, bText, sayBoo }) {
  return (
    <>
      <h1>{profileText}</h1>
      <Card_Ex3 cardText={cText} buttonText={bText} buttonClick={sayBoo} />
    </>
  );
}

export default Profile_Ex3;
