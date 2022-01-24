import { useState, useEffect } from "react";

function Teste2() {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect Rodou');

    return () => {
      console.log('vai desmontar');
    }
  }, []);
  
  return (
    <div className="App">
      <h1>useEffect</h1>
      <p>Digita na caixa</p>
      <br/>
      <input onChange={event => setName(event.target.value)} />
      <br/>
      <span> {name} </span>
  </div>
  );
}

export default Teste2;