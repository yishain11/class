import "./App.css";
import FirstCondition from "./components/FirstCondition.tsx";
import FirstStateComp from "./components/FirstState.tsx";
import MyComponent from "./components/MyComponent.tsx";
import StyleBug from "./components/StyleError/StyleBug.tsx";
import FirstClass from "./components/FirstClass.tsx";
import { lowerCaseComp } from "./components/lowercaseComp.tsx";
import StyleASVar from "./StyleAsVar.tsx";
function App() {
  return (
    <>
      {/* my first component */}
      <MyComponent />
      {/* lowercase comp */}
      {/* <lowerCaseComp /> - error: The tag <lowerCaseComp> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter */}
      {/* first comp with state */}
      <FirstStateComp />
      {/* first comp with conditional redering */}
      <FirstCondition />
      {/* first use of class */}
      <FirstClass />
      {/* style  as var */}
      <StyleASVar />
      {/* style bug */}
      <StyleBug />
      <h1>hi there</h1>
    </>
  );
}

// what react function returns?
console.log(App());
export default App;
