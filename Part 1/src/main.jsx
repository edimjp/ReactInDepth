import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import WarmUpApp from "../topics/statelessComponent/warmupEx.jsx";
import Exercise1 from "../topics/statelessComponent/Exercise1.jsx";
import Card from "../topics/statelessComponent/CardExercise2.jsx";
import Cars from "../topics/statelessComponent/CarsExercise3.jsx";
import People from "../topics/statelessComponent/People_Bonus.jsx";
import Button from "../topics/Events/Button_WarmupEx.jsx";
import Input from "../topics/Events/Input_Excercise1.jsx";
import Table from "../topics/Events/Grades_Excercise2.jsx";
import Form from "../topics/Events/Form_Excercise3.jsx";
import { Props } from "../topics/Componet_Composition&Props/Props.jsx";
import { Section_Warmup } from "../topics/Componet_Composition&Props/Section_Warmup.jsx";
import Section_Ex1 from "../topics/Componet_Composition&Props/Section_Ex1.jsx";
import Section_Ex2 from "../topics/Componet_Composition&Props/Section_Ex2.jsx";
import Profile_Ex3 from "../topics/Componet_Composition&Props/Profile_Ex3.jsx";
import Paragraph_Bonus from "../topics/Componet_Composition&Props/Paragraph_Bonus.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <WarmUpApp />
    <Exercise1 />
    <Card />
    <Cars />
    <People />
    <Button />
    <Input />
    <Table />
    {/* <Form /> */}
    <Props firstN="Edim" lastN="Paul" />
    <Section_Warmup />
    <Section_Ex1 />
    <Section_Ex2 />
    <Profile_Ex3
      profileText={"yes, profile Text!"}
      cText={"Wow, cText"}
      bText={"Click Me"}
      sayBoo={() => console.log("Yes, Say Boo!")}
    />

    <Paragraph_Bonus text={"Paragraph Bonus Text"}>
      <h1>BONUS</h1>
      <input placeholder="name" />
    </Paragraph_Bonus>
  </StrictMode>
);
