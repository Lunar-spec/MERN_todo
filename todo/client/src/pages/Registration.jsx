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
            const response = await axios.post(`${import.meta.env.BACKEND_URL}/users/reg`, {
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
            <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
                <div className="form-group">
                    <input
                        placeholder='Username'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Confirm Password'
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
