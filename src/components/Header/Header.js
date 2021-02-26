import React from 'react';
import "./Header.css";
import logo from '../../myResources/images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""></img>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;