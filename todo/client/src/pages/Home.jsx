import { useNavigate } from 'react-router-dom';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import TodoList from '../components/TodoList/TodoList';
import './Home.scss';
import { useEffect } from 'react';

function Home() {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    useEffect(() => {
        if (!username) {
            navigate('/login');
        }
    }, [username]);

    return (
        <div className="home-container">
            <div className="home-left">
                <h1>Todo App</h1>
                <h2 className="username">Hello <span>{username}</span>! </h2>
                <CreateTodo />
            </div>
            <div className="home-right">
                <div className='home-content'>
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default Home;
