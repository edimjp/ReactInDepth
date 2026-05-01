import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App.jsx";
// import Home from "./Exercises/WarmUp/Home.jsx";
import Home from "./Exercises/Ex3/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
