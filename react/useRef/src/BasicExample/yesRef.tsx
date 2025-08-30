import { useRef, useState } from "react";

export default function YesRef() {
  const [theme, setTheme] = useState("light");
  const name = useRef(null);
  if (name.current === null) {
    name.current = prompt("please say your name: ");
  }

  return (
    <>
      <h1>wellcome {name.current} to the app!</h1>
      <h3>them button</h3>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        change theme
      </button>
      <p>theme is: {theme}</p>
    </>
  );
}
