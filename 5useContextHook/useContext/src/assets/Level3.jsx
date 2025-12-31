import { createContext, useState } from "react";
import Level2 from "./Level2.jsx";

const AuthContext = createContext();
const authStateInitials = { userId: 456, loggedIn: true };

function Level3() {
  const [authState, setAuthState] = useState(authStateInitials);
  return (
    <>
      <h1>Level 3</h1>
      <AuthContext.Provider value={[authState, setAuthState]}>
        <Level2 />
      </AuthContext.Provider>
    </>
  );
}

export default Level3;
export { AuthContext };
