import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const result = await axios.get('http://localhost:8080/api/todos');
            setTodos(result.data);
        };
        fetchTodos();
    }, []);

    const addTodo = async (title) => {
        const result = await axios.post('http://localhost:8080/api/todos', { title });
        setTodos([...todos, result.data]);
    };

    const updateTodo = async (id, updatedTodo) => {
        const result = await axios.put('http://localhost:8080/api/todos/${id}', updatedTodo);
        setTodos(todos.map(todo => (todo.id === id ? result.data : todo)));
    };

    const deleteTodo = async (id) => {
        await axios.delete('http://localhost:8080/api/todos/${id}');
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <ToDoInput addTodo={addTodo} />
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;