import { useState, useEffect } from "react";

function Pokemon() {
  const URL = "https://pokeapi.co/api/v2/pokemon/mankey";

  const [src, setSRC] = useState("");

  useEffect(() => {
    async function PokeAPI() {
      const res = await fetch(URL);
      const resObj = await res.json();
      // console.log(resObj);
      setSRC(resObj.sprites.other["official-artwork"].front_default);
    }

    PokeAPI();
  }, []);
  return (
    <>
      <h1>Mankey</h1>
      <img src={src} alt="Mankey Image" />
    </>
  );
}

export default Pokemon;
