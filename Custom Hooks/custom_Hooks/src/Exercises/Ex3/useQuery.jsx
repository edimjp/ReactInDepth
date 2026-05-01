import { useEffect, useRef, useState } from "react";

function useQuery(URL) {
  const [data, setData] = useState(null);
  const cache = useRef(new Map());
  const cacheData = cache.current;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        cache.current.set(URL, json);
        setData(json);
      });
  }, []);

  function fetcher(newURL) {
    //CACHE HIT
    if (cacheData.has(newURL)) return setData(cacheData.get(newURL));

    // CACHE MISS
    fetch(newURL)
      .then((response) => response.json())
      .then((json) => {
        cacheData.set(newURL, json);
        setData(json);
      });
  }

  return { data, fetcher };
}

export default useQuery;
