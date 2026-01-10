import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import Input from "./Input.jsx";
// import Button from "./Exercises/WarpUp/Button.jsx";
// import Button from "./Exercises/Ex1/Button.jsx";
import Auth from "./Exercises/Ex2/Auth.jsx";
import Names from "./Exercises/Ex3/Names.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Button /> */}
    {/* <Auth /> */}
    <Names />
  </StrictMode>
);
