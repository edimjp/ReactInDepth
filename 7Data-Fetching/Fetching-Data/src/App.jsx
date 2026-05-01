import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>
      response.json().then((json) => setData(json))
    );
  }, []);

  return (
    <>
      <p>
        {data?.name} {data && data.name}
      </p>
    </>
  );
}

export default App;
