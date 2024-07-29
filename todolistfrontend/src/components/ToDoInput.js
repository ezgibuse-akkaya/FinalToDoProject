import React, { useState } from 'react';

const ToDoInput = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add new task</button>
        </form>
    );
};

export default ToDoInput;