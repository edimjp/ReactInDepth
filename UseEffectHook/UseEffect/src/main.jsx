import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./UseEffectLecture.jsx";
// import Counter from "./warmup/CounterWarmUp.jsx";
// import Interval from "./Ex1/IntervalEx1.jsx";
// import Home_Ex2 from "./Ex2/Home_Ex2.jsx";
import Pokemon from "./Ex3/Pokemon";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Interval /> */}
    {/* <Home_Ex2 /> */}
    <Pokemon />
  </StrictMode>
);
