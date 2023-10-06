import { useState } from 'react';
import axios from 'axios';

import './CreateTodo.scss';

function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const token = localStorage.getItem('Token')
    const userId = localStorage.getItem('userId')

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (title.trim() === '' || description.trim() === '') {
            return;
        }

        try {
            await axios.post(`${import.meta.env.BACKEND_URL}/todos`, {
                userId,
                title,
                description
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setTitle('');
            setDescription('');

            // alert('Todo created successfully!');
            // window.location.reload(true)
        } catch (error) {
            console.log(error)
            alert('Error creating todo')
        }
    };

    return (
        <div className="container">
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
    );
}

export default CreateTodo;
