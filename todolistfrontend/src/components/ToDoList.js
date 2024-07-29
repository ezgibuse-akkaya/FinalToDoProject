import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default ToDoList;