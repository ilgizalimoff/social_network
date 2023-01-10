import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://w7.pngwing.com/pngs/876/201/png-transparent-logo-graphic-designer-logos-company-logo-wikimedia-commons.png'></img>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>    
    
}
export default Header;