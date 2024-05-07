import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const buttons = [
    "AC",
    "DE",
    ".",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    "=",
  ];

  function handle_Click(e) {
    switch (e.target.id) {
      case "=":
      case "↲":
        setResult(eval(result).toString());
        break;
      case "AC":
        setResult("");
        break;
      case "DE":
        setResult(result.slice(0, -1));
        break;

      default:
        setResult(result.concat(e.target.id));
        break;
    }
  }

  return (
    <div className="calculator">
      <h2 className="heading"> Calculator</h2>
      <div className="main-calculator gradient">
        <input className="input" type="text" value={result} />
        <div className="buttons">
          {buttons.map((num) => (
            <button id={num} key={num} onClick={handle_Click}>
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
