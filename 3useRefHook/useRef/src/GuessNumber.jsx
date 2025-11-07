import { useEffect, useState, useRef } from "react";

function GuessNumber() {
  const [condition, setCondition] = useState("");
  const inpRef = useRef(null);
  const randomNum = useRef(null);

  useEffect(() => {
    randomNum.current = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum.current);
  }, []);

  function handleGuess() {
    let { value: inpValue } = inpRef.current;
    inpValue = Number(inpValue);

    const randomValue = randomNum.current;

    console.log(inpValue, randomValue);
    if (inpValue < randomValue) {
      setCondition("Too Low!");
    } else if (inpValue > randomValue) {
      setCondition("Too High!");
    } else {
      setCondition("You Win!");
    }
  }

  return (
    <>
      <input ref={inpRef} type="text" />
      <button onClick={handleGuess}>Guess!</button>
      <p>{condition}</p>
    </>
  );
}

export default GuessNumber;
