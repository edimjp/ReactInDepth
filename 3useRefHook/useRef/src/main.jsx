import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Input from "./InputWarmUp.jsx";
import Video from "./VideoEx1.jsx";
import GuessNumber from "./GuessNumber.jsx";
import Form_Ex3 from "./Form_EX3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Input /> */}
    {/* <Video /> */}
    {/* <GuessNumber /> */}
    <Form_Ex3 />
  </StrictMode>
);
