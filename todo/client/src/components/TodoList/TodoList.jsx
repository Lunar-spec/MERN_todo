import { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoList.scss';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const token = localStorage.getItem('Token')

        console.log(userId)
        try {
            const response = await axios.get(`http://localhost:5000/todos/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response)
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('Token')
        console.log(id)

        try {
            await axios.delete(`http://localhost:5000/todos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            fetchTodos();

            console.log('Todo deleted successfully!');
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        userId ? 
        <div className="todo-list">
            <h2>Todo List</h2>
            <ul>
                {console.log(todos)}
                {todos.map((todo) => 
                (
                    <li key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <button onClick={todo.userId === userId ? () => handleDelete(todo._id) : null}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        :
        <>
            {null}
        </>
    );
}

export default TodoList;
