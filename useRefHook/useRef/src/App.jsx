import { useEffect, useRef } from "react";

function App() {
  const ref = useRef(0);
  const domRef = useRef(null);
  domRef.color = "red";
  domRef.name = "edim";
  console.log(domRef);
  console.log(ref);

  const handleClick = () => {
    ref.current++;
    console.log(ref);
  };

  useEffect(() => {
    console.log("Changed ref:", ref);
    console.log(domRef);
  });

  return (
    <>
      <h1 ref={domRef}>App</h1>
      <h2>{ref.current}</h2>
      <button onClick={handleClick}>Go Up</button>
    </>
  );
}

export default App;
