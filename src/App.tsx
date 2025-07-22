import "./App.css";
import Counter from "./Questions/Counter";
import Debounce from "./Questions/Debounce";
import FetchData from "./Questions/FetchData";
import Throttle from "./Questions/Throttle";
import Todo from "./Questions/Todo";

function App() {
  return (
    <>
      {/* <Counter />
      <Todo />
      <FetchData /> */}
      <Debounce />
      <Throttle />
    </>
  );
}

export default App;
