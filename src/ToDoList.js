import React, { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function ToDoList() {
  const [itemsList, setItemsList] = useState([]);

  function handleAddItemToList(newItem) {
    setItemsList([...itemsList, newItem]);
  }

    return(
    <div>
      <h1>To Do List</h1>
      <Form onAddItem={handleAddItemToList}/>
      <List itemsList={itemsList}/>
    </div>
  );
}

export default ToDoList;