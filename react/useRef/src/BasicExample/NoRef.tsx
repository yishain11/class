import { useState } from "react";

export default function NoRef() {
  const [theme, setTheme] = useState("light");
  const name = prompt("please say your name: ");
  return (
    <>
      <h1>wellcome {name} to the app!</h1>
      <h3>them button</h3>
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        change theme
      </button>
      <p>theme is: {theme}</p>
    </>
  );
}
