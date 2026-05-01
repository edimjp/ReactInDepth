import useLogOnMount from "./logOnMount.jsx";
import useTimer from "./Timer.jsx";

function App() {
  useLogOnMount("App");
  const time = useTimer();

  return (
    <>
      <h1>App</h1>
      <p>{time}</p>
    </>
  );
}

export default App;
