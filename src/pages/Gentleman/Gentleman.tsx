import { Component1, Component2 } from "../../components";
import { ComponentContext1, ComponentContext2 } from "./components";
import ComponentRedux2 from "./components/ComponentRedux2";
import { GentlemanProvider } from "./context/Gentleman.provider";

function Gentleman() {
  return (
    <GentlemanProvider>
      <div>
        <ComponentContext1 />
        <ComponentContext2 />
        <ComponentRedux2 />
        <h1>RxJS</h1>
        <Component1 />
        <Component2 />
      </div>
    </GentlemanProvider>
  );
}
export default Gentleman;
