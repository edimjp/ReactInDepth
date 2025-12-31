import { AuthContext } from "./Level3.jsx";
import { useContext } from "react";

function Level1() {
  const [authState, setAuthState] = useContext(AuthContext);
  //   const [context, setContext] = useState(authContext);
  //   console.log(authContext);

  function handleClick() {
    // console.log(authContext);
    setAuthState((prev) => {
      return { ...authState, add: "something" };
    });
  }
  return (
    <>
      <h3>Level 1</h3>
      <button onClick={handleClick}>Add</button>
      <p>{JSON.stringify(authState, null, 2)}</p>
    </>
  );
}

export default Level1;
