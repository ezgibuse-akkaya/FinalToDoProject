import React, { useState } from "react";
import { createTodo } from "../services/todoService";
import "../styles/ToDoInput.css";

const ToDoInput = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = async () => {
    if (newTodo.trim()) {
      const addedTodo = await createTodo({ task: newTodo, completed: false });
      if (addedTodo) {
        onAdd(addedTodo);
        setNewTodo("");
      }
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={handleAdd}>Add new task</button>
    </div>
  );
};

export default ToDoInput;
