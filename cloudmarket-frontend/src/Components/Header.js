import React from 'react'
import { Link } from 'react-router'
import LoginIcon from '@mui/icons-material/Login';
import './components.css'
const Header = ({isLoggedIn}) => {
  return (
    <div className='d-flex justify-content-between ms-3 me-3 '>
        <h3><Link className='header-link' to="/">Cloud Market</Link></h3>
        <nav className='d-flex gap-4 '>
            <Link to="/login">{isLoggedIn ? "Login" : <LoginIcon/> }</Link>
            <Link to=''>Contact</Link>
        </nav>
    </div>
  )
}

export default Header