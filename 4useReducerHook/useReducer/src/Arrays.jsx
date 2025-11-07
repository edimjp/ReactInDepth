import { useReducer } from "react";

function reducer(prevState, action) {
  // Object.is(Obj1, Obj2)
  //   prevState.push(action.type);
  //   return prevState
  // The commented code above will not work
  return [...prevState, action.value];
}

function ArrayReducer() {
  const [state, dispatch] = useReducer(reducer, [30]);

  function add() {
    dispatch({ type: "add", value: 12 });
    console.log(state);
  }
  return (
    <>
      <p>{JSON.stringify(state, null, 2)}</p>
      <button onClick={add}>Add/Push to Array</button>
    </>
  );
}

export default ArrayReducer;
