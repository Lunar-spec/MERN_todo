/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PopUp.scss';

const PopUp = ({ task, onClose, onSave }) => {
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSaveChanges = () => {
        onSave(editedTask);
    };  

    return (
        <div className="popup-container">
            <div className="popup">
                <div className="popup-header">
                    <h2>Edit Task</h2>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="popup-content">
                    <input
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleInputChange}
                        placeholder="Task Title"
                    />
                    <textarea
                        name="description"
                        value={editedTask.description}
                        onChange={handleInputChange}
                        placeholder="Task Description"
                    />
                </div>
                <div className="popup-footer">
                    <button className="save-button" onClick={handleSaveChanges}>
                        Make Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
