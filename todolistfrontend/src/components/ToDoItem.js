import React from "react";
import "../styles/ToDoItem.css";

const ToDoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
    </div>
  );
};

export default ToDoItem;
