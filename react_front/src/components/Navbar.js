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
        <nav className="nav-extended  blue darken-3">
        <div className="nav-wrapper" style={{padding: '0 2rem'}}>
            <span className="brand-logo white-text text-darken-2" style={{fontSize: '20px'}}><i>AutoControl - система контроля и слежения за автомобилем</i></span>
            <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down blue-text text-darken-2" >
                <li><NavLink to="/autos" style={{fontSize: '20px'}}>Автомобили</NavLink></li>
                <li><NavLink to="/account" style={{fontSize: '20px'}}>Личный кабинет</NavLink></li>
                <li><a href="/" onClick={logoutHandler} style={{fontSize: '20px'}}>Выход</a></li>
            </ul>
        </div>
    </nav>
    )
}