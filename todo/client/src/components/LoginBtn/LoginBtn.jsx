import { Link } from 'react-router-dom'
import './LoginBtn.scss'
import PersonPinIcon from '@mui/icons-material/PersonPin';

const LoginBtn = () => {
    const userId = localStorage.getItem('userId')

    const handleLoutout = () => {
        localStorage.removeItem('Token');
        localStorage.removeItem('userId')
        localStorage.removeItem('username')

        window.location.reload(true);
    }
    return (
        userId ?
            <div className='log__container'>
                <Link onClick={() => handleLoutout()}>
                    <PersonPinIcon className='logout__icon'/>
                </Link>
            </div>
            :
            <div className='log__container'>
                <Link to={'/login'}>
                    <PersonPinIcon className='login__icon' />
                </Link>
            </div>
    )
}

export default LoginBtn