import { useEffect } from "react";

function useLogOnMount(name) {
  useEffect(() => {
    console.log(`${name || "Component"} has Mounted`);
  }, []);
}

export default useLogOnMount;
