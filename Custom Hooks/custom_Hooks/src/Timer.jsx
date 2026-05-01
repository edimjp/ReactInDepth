import { useState, useEffect, use } from "react";

function useTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return timer;
}

export default useTimer;
