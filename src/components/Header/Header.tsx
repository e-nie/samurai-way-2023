import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className = {s.header}>
            <img src = 'https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png'
                 alt = '' />
        </header>
    );
};

export default Header;
