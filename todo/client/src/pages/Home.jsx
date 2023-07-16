import CreateTodo from '../components/CreateTodo/CreateTodo';
import LoginBtn from '../components/LoginBtn/LoginBtn';
// import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';
import TodoList from '../components/TodoList/TodoList';
import './Home.scss'

function Home() {
    return (
        <>
            <div className="home-container">
                <h1>Todo App</h1>
                <div>
                    <CreateTodo />
                    <TodoList />
                    <LoginBtn />
                    <Register />
                </div>
            </div>
        </>
    );
}

export default Home;
