import { useState, useEffect } from "react";

function Section_Ex2() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log("Section has re-rendered");
  });

  return (
    <>
      <h2>Time on Page: {time} second(s) </h2>
    </>
  );
}

export default Section_Ex2;
