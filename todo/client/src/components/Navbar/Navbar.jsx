import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Todo App
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/login" className="navbar-link">Login</Link>
                    <Link to="/register" className="navbar-link">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
