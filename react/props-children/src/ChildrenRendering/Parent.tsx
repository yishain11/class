import Child from "./Child";

export default function Parent(props) {
  return (
    <>
      {/* fix - use props children */}
      <>{props.children}</>
    </>
  );
}
