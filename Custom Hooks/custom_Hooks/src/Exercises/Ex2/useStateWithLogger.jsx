import { useState, useEffect, useRef } from "react";

function useStateWithLogger(initialState) {
  const [state, setState] = useState(initialState);
  const previousState = useRef(initialState);

  useEffect(() => {
    console.log(`State Changed from: ${previousState.current} to: ${state}`);

    previousState.current = state;
  }, [state]);

  /*
  function loggedState(value) {
    console.log(value);
    setState(value); // setState is asynchronous, so, the two console.logs, will run first.
    console.log(value);
  }
*/

  return [state, setState];
}

export default useStateWithLogger;
