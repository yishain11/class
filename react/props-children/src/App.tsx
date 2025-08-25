import "./App.css";
import BasicProps from "./BasicProps";
import Child from "./ChildrenRendering/Child";
import Parent from "./ChildrenRendering/Parent";
import ParentReciviengFromChild from "./ChildToParent/Parent";

function App() {
  return (
    <>
      {/* basic props */}
      {/* <BasicProps title="title1" text="text1" /> */}
      {/* prop from state: parent -> child */}
      {/* prop function: child -> parent */}
      {/* child rendering - this wont work */}
      {/* <Parent>
        <Child />
        <Child />
      </Parent> */}
      {/* fix: props.children in parent */}

      {/* from parent to child */}
      <ParentReciviengFromChild />
    </>
  );
}

export default App;
