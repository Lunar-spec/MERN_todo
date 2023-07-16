import { useState } from 'react';
import axios from 'axios';

import './CreateTodo.scss';

function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const token = localStorage.getItem('Token')
    const userId = localStorage.getItem('userId')
    const username = localStorage.getItem('username')

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (title.trim() === '' || description.trim() === '') {
            return;
        }

        try {
            await axios.post('http://localhost:5000/todos', {
                userId,
                title,
                description
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setTitle('');
            setDescription('');

            console.log('Todo created successfully!');
            window.location.reload(true)
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    return (
        userId ? 
        <div className="container">
            <h2 className="username">Hello {username}! </h2>
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter todo title"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
                <button className='create__btn' type="submit">Create</button>
            </form>
        </div>
        :
        <>
            <div className="container">
                <h1 className='no__user'>Please Login to make your todos</h1>
            </div>
        </>
    );
}

export default CreateTodo;
