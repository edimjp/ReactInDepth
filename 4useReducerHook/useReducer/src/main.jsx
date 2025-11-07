import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import ArrayReducer from "./Arrays.jsx";
// import Counter from "./CounterEx1.jsx";
import Counter from "./Excercise2/Counter.jsx";
import ControlledForm from "./Exercise3/ControlledForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ArrayReducer /> */}
    {/* <Counter /> */}
    {/* <Counter /> */}
    <ControlledForm />
  </StrictMode>
);
