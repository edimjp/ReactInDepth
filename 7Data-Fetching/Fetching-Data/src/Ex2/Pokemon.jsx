import { useRef, useState } from "react";

function Pokemon() {
  const PokemonData = useRef(null);
  const Cache = useRef(new Map());

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  function getPokemon() {
    setError(false);
    const PokemonName = PokemonData.current.value;
    const CacheProps = Cache.current;
    if (CacheProps.has(PokemonName)) {
      setPokemon(CacheProps.get(PokemonName));
      return;
    }

    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${PokemonName}`
      );

      if (response.ok === false) {
        setError(true);
        setPokemon(null); //very important, to avoid weird rendering when wrong input is searched starting from the second consecutive time
        return;
      }

      const JSON = await response.json();
      setPokemon(JSON);
      CacheProps.set(PokemonName, JSON);
    }
    fetchPokemon();
  }

  if (error) {
    return (
      <>
        <input type="text" name="" ref={PokemonData} />
        <button onClick={getPokemon}>Search Again</button>
        <p>Sorry, Pokemon Character does not exist!</p>
      </>
    );
  }

  return (
    <>
      <input type="text" name="" id="" ref={PokemonData} />
      <button onClick={getPokemon}>Search!</button>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>{pokemon?.weight}</p>
    </>
  );
}
export default Pokemon;
