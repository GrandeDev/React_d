import { useState } from 'react';

function StateHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Maria");
  const [list, setList] = useState(["Casa 1", "Casa 2"]);

  return(
    <div>
      <h1> Clique no botão</h1>
      <button onClick={() => setCount(count + 1)}>
        Botão
      </button>

      <h1> Altere o nome: {name}</h1>
      <input
        onChange={(event) => setName(event.target.value)}
      />
      <h1> Nome atualizado: {name} </h1>

      <h1> Altere um item da lista pela caixa de texto: </h1>
      
      <input
        onChange={(event) => setList(event.target.value)} 
      />
      <ul>
        <li > {list} </li>
      </ul>
      

    </div>
  );
}

export default StateHook;