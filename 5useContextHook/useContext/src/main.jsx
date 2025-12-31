import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from './App.jsx'
// import Level3 from "./assets/Level3.jsx";
// import Parent from "./assets/Excercises/WarmUp/Parent.jsx";
// import Parent from "./assets/Exercises/Exercise1/Parent.jsx";
// import Parent from "./assets/Exercises/Exercise2/Parent.jsx";
import Parent from "./assets/Exercises/Exercise3/Parent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Level3 /> */}
    <Parent />
  </StrictMode>
);
