import ChildToParent from "./Child";

export default function ParentReciviengFromChild() {
  let value: string;
  function setValue(newValue: string) {
    value = newValue;
    console.log(`new value is: ${value}`);
  }
  return (
    <>
      <ChildToParent valueFn={setValue} />
    </>
  );
}
