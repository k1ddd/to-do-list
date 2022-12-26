import React, { useState } from "react";

import Main from "./components/Main/Main";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <div className="App container">
      <Main setToDo={setToDo} toDo={toDo} />
      <ToDoList toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
