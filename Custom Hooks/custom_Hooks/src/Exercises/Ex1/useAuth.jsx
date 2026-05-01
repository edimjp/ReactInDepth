import { useState, useEffect } from "react";

function useAuth() {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBool(!bool);
    }, 4000);
  }, []);

  return bool;
}

export default useAuth;
