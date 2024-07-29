import React, { useState } from 'react';

const ToDoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleUpdate = () => {
        updateTodo(todo.id, { ...todo, title: newTitle });
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleUpdate} className="edit">Save</button>
                </>
            ) : (
                <>
                    <span>{todo.title}</span>
                    <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => updateTodo(todo.id, {...todo, completed: !todo.completed})}
                            className="complete">
                        {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                    </button>
                </>
            )}
        </div>
    );
};

export default ToDoItem;