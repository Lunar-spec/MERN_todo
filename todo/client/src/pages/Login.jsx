import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/users/login', {
                username,
                password,
            })
            // //console.log(response)
            const token = response.data.token;
            localStorage.setItem('Token', token)
            localStorage.setItem('userId', response.data.user_id)
            localStorage.setItem('username', response.data.username)
            // //console.log(response.data.username)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="login-container">
            <div className="background"></div>
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
