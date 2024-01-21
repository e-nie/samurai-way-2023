import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PropsType} from "./HeaderContainer";



const Header = (props: PropsType) => {
    return (
        <header className = {s.header}>
            <img src = 'https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png'
                 alt = '' />
            <div className = {s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to = {'/login'}>Login</NavLink> }

            </div>
        </header>
    );
};

export default Header;
