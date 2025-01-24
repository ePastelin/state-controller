import { Provider } from "react-redux";
import "./App.css";
import Gentleman from "./pages/Gentleman/Gentleman";
import store from "./redux/store";
import ComponentRedux1 from "./components/Redux/ComponentRedux1";

function App() {
  return (
    <>
      <Provider store={store}>
        <Gentleman />
        <h1>Redux</h1>
        <ComponentRedux1 />
      </Provider>
    </>
  );
}

export default App;
