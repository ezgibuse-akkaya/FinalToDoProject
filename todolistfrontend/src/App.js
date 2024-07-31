import React, { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1 className="app-title">My~Final~Project~Todo~App</h1>
      <h2 className="section-title">To~Do~Input</h2>
      <ToDoInput onAdd={addTodo} />
      <h2 className="section-title">To~Do~List</h2>
      <ToDoList />
    </div>
  );
}

export default App;
