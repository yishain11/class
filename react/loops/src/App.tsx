import "./App.css";
import Card from "./Components/Card";

function App() {
  const names: string[] = ["yishai", "yair", "noga", "shoham"];
  return (
    <>
      {/* react can show a list of compnents - not just components! */}
      {/* .map returns an array! (js fact) */}
      {names.map((name) => (
        <Card name={name} />
      ))}
      {}
    </>
  );
}

export default App;
