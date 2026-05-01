import { useState, useEffect } from "react";

function Pokemon() {
  const [pokemonObject, setPokemonObj] = useState(null);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/squirtle";
    async function fetchPokemon() {
      const response = await fetch(URL);
      const json = await response.json();
      setPokemonObj(json);
      console.log(json);
    }
    fetchPokemon();
  }, []);

  return (
    <>
      <p>{pokemonObject && pokemonObject.name}</p>
      <img src={pokemonObject?.sprites.back_shiny} alt={pokemonObject?.name} />
      <p>{pokemonObject?.weight}</p>
    </>
  );
}
export default Pokemon;
