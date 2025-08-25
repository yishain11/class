export default function BasicProps(props) {
  return (
    <>
      <h1>title is: {props.title}</h1>
      <p>text is: {props.text}</p>
      <p>final words are: {props.finalWords}</p>
    </>
  );
}
