import React from 'react';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';

const Header = () => {
    return (
        <div className="Header">
            <TopBar />
            <NavBar />
        </div>
    );
};

export default Header;