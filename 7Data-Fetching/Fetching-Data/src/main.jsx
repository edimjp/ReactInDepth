import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Pokemon from "./Warmup/Pokemon.jsx";
// import Pokemon from "./Ex1/Pokemon.jsx";
// import Pokemon from "./Ex2/Pokemon.jsx";
import Pokemon from "./Ex3/Pokemon.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pokemon />
  </StrictMode>,
);
