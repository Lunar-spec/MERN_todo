import { Link, useNavigate } from 'react-router-dom';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import './Navbar.scss'

function Navbar() {
    const navigate = useNavigate();

    const username = localStorage.getItem('username')

    const handleLogout = async () => {
        localStorage.removeItem('username')
        localStorage.removeItem('user_id')
        localStorage.removeItem('Token')

        navigate('/login')
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <h2>
                        Todo App <PlaylistAddCheckRoundedIcon fontSize='medium' />
                    </h2>
                </Link>
                {
                    !username ? (
                        <div className="navbar-links">
                            <Link to="/login" className="navbar-link">Login</Link>
                            <Link to="/register" className="navbar-link">Register</Link>
                        </div>
                    )
                        :
                        (
                            <div className="navbar-links">
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default Navbar;
