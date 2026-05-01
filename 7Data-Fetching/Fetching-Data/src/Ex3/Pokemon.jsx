import { useEffect, useState } from "react";
function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0";
    async function fetchPoke() {
      const response = await fetch(URL);
      const JSON = await response.json();
      console.log(JSON);
      setPokemon(JSON);
    }
    fetchPoke();
  }, []);

  const pokeName = pokemon?.results.map((data) => (
    <p key={data.name}>{data.name} </p>
  ));

  function prev() {
    fetch(pokemon.previous)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }

  function next() {
    fetch(pokemon.next)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }
  return (
    <>
      {pokeName}
      {pokemon?.previous && <button onClick={prev}>Previous</button>}
      {pokemon?.next && <button onClick={next}>Next</button>}
    </>
  );
}

export default Pokemon;
