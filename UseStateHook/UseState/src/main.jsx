import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import Counter from "./Counter";
import TextBox from "./TextBox";
import Form from "./Form";
import Profile from "./Profile";
import Counter2 from "./Counter2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <TextBox />
    <Form />
    <Profile />
    <Counter2 />
  </StrictMode>
);
