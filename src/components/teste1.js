import { useState } from "react";

function Teste1() {
  const [counter, setCounter] = useState(0)
  
  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }
  
  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }
  
  return (
    <div className="App">
    <h1>useState</h1>
    <h2>{counter}</h2>
    <button onClick={handlePlus}> + </button>
    <button onClick={handleMinus}> - </button>
    </div>
  );
}

export default Teste1;