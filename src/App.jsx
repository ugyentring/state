import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleSub() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div className="App">
        <div className="box">
          <p>{count}</p>
          <button onClick={handleAdd} className="add">
            Add
          </button>
          <button onClick={handleSub} className="sub">
            Sub
          </button>
          <br />
          <button onClick={handleReset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
