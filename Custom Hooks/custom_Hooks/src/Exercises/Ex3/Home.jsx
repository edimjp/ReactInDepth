import { useState } from "react";
import useQuery from "./useQuery.jsx";

function Home() {
  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  const { data, fetcher } = useQuery(URL);
  const [pokeName, setPokename] = useState("");

  function fetchData() {
    fetcher(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  }

  return (
    <>
      <h1>Pokemon APp</h1>
      <p>Name: {data?.name}</p>
      <p>Height: {data?.height}</p>
      <input
        type="text"
        placeholder="Pokemon Name"
        value={pokeName}
        onChange={(e) => setPokename(e.target.value)}
      />
      <button onClick={fetchData}>Search!</button>
    </>
  );
}

export default Home;
