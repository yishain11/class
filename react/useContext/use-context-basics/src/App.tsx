import { useState } from "react";
import "./App.css";
import Shop from "./Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>welcome to the shopping app</h1>

      <Shop />
    </>
  );
}

export default App;
