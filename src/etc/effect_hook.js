import { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState("");

  useEffect(() => {
    document.title = `${count}`;
  });

  return(
    <div>
      <h1>Troque o título do documento {count}</h1>
      <input placeholder="Digite aqui"
      onChange={(event) => setCount(event.target.value)}/>
    </div>
  );
}

export default EffectHook;