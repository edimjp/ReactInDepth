import { useState, useEffect } from "react";

function Pokemon() {
  const [pokemonObject, setPokemonObj] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/mootin";
    async function fetchPokemon() {
      const response = await fetch(URL);
      if (response.ok === false) {
        setError(true);
        return;
      }
      const json = await response.json();
      setPokemonObj(json);
      console.log(json);
    }
    fetchPokemon();
  }, []);

  if (error) {
    return <p>Sorry, Pokemon Character does not exist!</p>;
  }

  return (
    <>
      <p>{pokemonObject && pokemonObject.name}</p>
      <img src={pokemonObject?.sprites.back_shiny} alt={pokemonObject?.name} />
      <p>{pokemonObject?.weight}</p>
    </>
  );
}
export default Pokemon;
