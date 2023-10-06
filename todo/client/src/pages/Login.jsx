import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}users/login`, {
                username,
                password,
            })
            const token = response.data.token;
            localStorage.setItem('Token', token)
            localStorage.setItem('userId', response.data.user_id)
            localStorage.setItem('username', response.data.username)
            // console.log(response.data)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            placeholder='Username'
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            placeholder='Password'
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
