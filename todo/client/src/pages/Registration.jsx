import { useState } from 'react';
import './Registration.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Check your passwords again, they aren't matching")
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/users/reg', {
                username,
                email,
                password
            })
            console.log(response.data)
            navigate('/login')
            alert("Registered! Please Login")
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="registration-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
