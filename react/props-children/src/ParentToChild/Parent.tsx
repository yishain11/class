import Child from "./Child";

export default function ParParentToChild() {
  const name = "im a parten";
  return (
    <>
      <Child name={name} />
    </>
  );
}
