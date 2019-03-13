import './Navbar.scss';
import React, { Component } from 'react';
import navImageIcon from './images/nav-image-icon.svg';
import menuIcon from './images/menu-icon.svg';
import searchIcon from './images/search-icon.svg';
import navLine from './images/nav-line.svg';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="Navbar">
                    <img className="NavImage" src={navImageIcon} alt="NavImage" />
                    <img className="NavMenu" src={menuIcon} alt="NavMenu" />
                    <img className="NavSearch" src={searchIcon} alt="NavSearch" />
                </div>
                <img className="NavLine" src={navLine} alt="NavLine" />
            </div>
        );
    }
}

export default Navbar;
