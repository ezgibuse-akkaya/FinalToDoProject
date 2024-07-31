import React, { useEffect, useState } from 'react';
import { getAllTodos, getCompletedTodos } from '../services/todoService';
import ToDoItem from './ToDoItem';
import '../styles/ToDoList.css';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchTodos = async () => {
            let fetchedTodos = [];
            if (filter === 'all') {
                fetchedTodos = await getAllTodos();
            } else if (filter === 'done') {
                fetchedTodos = await getCompletedTodos(true);
            } else {
                fetchedTodos = await getCompletedTodos(false);
            }
            setTodos(fetchedTodos);
        };
        fetchTodos();
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="todo-list">
            <div className="filters">
                <button onClick={() => handleFilterChange('all')}>All</button>
                <button onClick={() => handleFilterChange('done')}>Done</button>
                <button onClick={() => handleFilterChange('todo')}>Todo</button>
            </div>
            <div className="todo-items">
                {todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default ToDoList;