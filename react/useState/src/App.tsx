import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>basic state: {count}</h1>
      {/* basic re rendetring */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add 1
      </button>
    </>
  );
}

export default App;
