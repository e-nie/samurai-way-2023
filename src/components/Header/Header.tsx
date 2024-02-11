import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PropsType} from "./HeaderContainer";
import sun from '../../../src/assets/images/vecteezy_ai-generated-the-sun-artistic-style-illustration-cartoon-sun_35488997.png'



const Header = (props: PropsType) => {
    return (
        <header className = {s.header}>
            <img className= {s.logo} src = {sun}
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
