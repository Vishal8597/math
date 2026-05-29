import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear screen
  const clearInput = () => {
    setInput("");
  };

  // Delete one character
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  // Calculate result
  const calculateResult = () => {
    try {
    setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Calculator</h1>

        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />

        <div className="buttons">

          <button onClick={clearInput} className="operator">
            C
          </button>

          <button onClick={deleteLast} className="operator">
            DEL
          </button>

          <button onClick={() => handleClick("/")} className="operator">
            /
          </button>

          <button onClick={() => handleClick("*")} className="operator">
            *
          </button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>

          <button onClick={() => handleClick("-")} className="operator">
            -
          </button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>

          <button onClick={() => handleClick("+")} className="operator">
            +
          </button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button
            onClick={calculateResult}
            className="equal"
          >
            =
          </button>

          <button
            onClick={() => handleClick("0")}
            className="zero"
          >
            0
          </button>

          <button onClick={() => handleClick(".")}>.</button>

        </div>
      </div>
    </div>
  );
}

export default App;