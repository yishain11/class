import { useState } from "react";

export function NoHtmlRef() {
  const [clickedItem, setClickedItem] = useState(null);
  let isSlected;
  return (
    <>
      <h1>you selected: {clickedItem.innerText}</h1>
      <ul>
        {[1, 2, 3].map((num) => (
          <li
            style={isSlected ? { color: "red" } : null}
            onClick={(e) => {
              isSlected = true;
              setClickedItem(e.target);
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </>
  );
}

export function HtmlRef() {
  return <></>;
}
