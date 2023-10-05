import { React, useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function handleClear() {
    setResult("");
  }

  function handleCalculate() {
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  function handleSqrt() {
    setResult(Math.sqrt(result).toString());
  }

  function handleCbrt() {
    setResult(Math.cbrt(result).toString());
  }

  function handleLog2() {
    setResult(Math.log2(result).toString());
  }

  function handleLog10() {
    setResult(Math.log10(result).toString());
  }

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="keypad">
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button name="sqrt" onClick={handleSqrt}>
          sqrt
        </button>
        <button name="cbrt" onClick={handleCbrt}>
          cbrt
        </button>
        <button name="log2" onClick={handleLog2}>
          log2
        </button>
        <button name="log10" onClick={handleLog10}>
          log10
        </button>
        <button className="equal" onClick={handleCalculate}>
          =
        </button>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;
