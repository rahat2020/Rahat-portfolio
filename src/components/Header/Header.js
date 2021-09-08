import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain'
const Header = () => {
    return (
        <div className="Header_container">
            <Navbar />
            <HeaderMain />
            {/* <div class="animation-area">
                <ul class="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
        </div>
    );
};

export default Header;