import { Link } from "react-router-dom"
import './Register.scss'

import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Register = () => {
    return (
        <div className="reg__btn">
            <Link to={'/register'}>
                <ControlPointIcon color="secondary" className="reg__icon"/>
            </Link>
        </div>
    )
}

export default Register