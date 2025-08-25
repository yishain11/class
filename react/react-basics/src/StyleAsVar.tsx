import "./StyleASVar.css";

export default function StyleASVar() {
  const mode = Math.random() > 0.5 ? "dark" : "light";
  const fontSize = "50px";

  return (
    <>
      <h1>mode is: {mode}</h1>
      <p className={mode} style={{ fontSize: fontSize }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam velit
        numquam quo fugit ducimus facere tenetur, magni est nihil debitis culpa
        laudantium architecto voluptates nulla distinctio, enim officiis
        perspiciatis tempore.
      </p>
    </>
  );
}
