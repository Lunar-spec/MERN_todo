import { useEffect, useState } from 'react';
import axios from 'axios';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import './TodoList.scss';
import PopUp from '../PopUp';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const userId = localStorage.getItem('userId');
    const [showPopUp, setShowPopUp] = useState(false);
    const [editedTask, setEditedTask] = useState(null);

    const handleEdit = (id) => {
        const taskToEdit = todos.find((task) => task._id === id);
        if (taskToEdit) {
            setEditedTask(taskToEdit);
            setShowPopUp(true);
        }
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    const handleSaveChanges = async (updatedTodo) => {
        const token = localStorage.getItem('Token')
        console.log(updatedTodo)

        const todoId = updatedTodo._id;

        try {
            const resonse = await axios.put(`${import.meta.env.BACKEND_URL}/todos/${todoId}`, updatedTodo, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTodos((prevTodo) =>
                prevTodo.map(todo => (
                    todo._id === updatedTodo._id ? updatedTodo : todo
                ))
            );

            console.log(resonse)
        } catch (error) {
            console.log('Error fetching todos:', error);
        }

        setShowPopUp(false);
    };

    useEffect(() => {
        fetchTodos();
    }, [todos]);

    const fetchTodos = async () => {
        const token = localStorage.getItem('Token')

        try {
            const response = await axios.get(`${import.meta.env.BACKEND_URL}/todos/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('Token')

        try {
            await axios.delete(`${import.meta.env.BACKEND_URL}/todos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            fetchTodos();
        } catch (error) {
            alert('Error deleting todo')
        }
    };

    return todos ? (
        <div className="todo-list">
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <div className='icons'>
                            <EditRoundedIcon
                                className='edit-icon'
                                onClick={
                                    todo.userId === userId ? () => handleEdit(todo._id) : null
                                }
                            />
                            <DeleteRoundedIcon
                                onClick={
                                    todo.userId === userId ? () => handleDelete(todo._id) : null
                                }

                                className='del-icon'
                            />
                        </div>
                    </li>
                ))}
            </ul>
            {showPopUp && editedTask && (
                <PopUp task={editedTask} onClose={handleClosePopUp} onSave={handleSaveChanges} />
            )}
        </div>
    ) : (
        <h2>Start adding your todos here</h2>
    );
}

export default TodoList;
