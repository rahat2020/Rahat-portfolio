import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain'
const Header = () => {
    return (
        <div className="Header_container">
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;