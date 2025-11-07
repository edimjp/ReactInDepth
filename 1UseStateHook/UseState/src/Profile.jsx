import { useState } from "react";
import Button from "./Button";

function Profile() {
  const [textLogin, setTextLogin] = useState("Logged In");

  return (
    <>
      <p>{textLogin}</p>
      <Button setTextLogin={setTextLogin} />
    </>
  );
}

export default Profile;
