export default function ChildToParent({ valueFn }) {
  return (
    <>
      <button
        onClick={() => {
          const newValue = prompt("please give a new value: ");
          valueFn(newValue);
        }}
      >
        click me
      </button>
    </>
  );
}
