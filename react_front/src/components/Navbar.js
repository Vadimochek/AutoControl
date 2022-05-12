import React, { useContext } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/');
    }

    return(
        <nav className="nav-extended  light-green accent-4">
        <div className="nav-wrapper" style={{padding: '0 2rem'}}>
            <span className="brand-logo blue-text text-darken-2">AutoControl</span>
            <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down blue-text text-darken-2">
                <li><NavLink to="/autos">Автомобили</NavLink></li>
                <li><NavLink to="/account">Личный кабинет</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Выход</a></li>
            </ul>
        </div>
    </nav>
    )
}