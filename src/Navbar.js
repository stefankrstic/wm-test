import './Navbar.scss';
import React, { Component } from 'react';
import navImageIcon from './images/nav-image.png';
import menuIcon from './images/menu-icon.png';
import searchIcon from './images/search-icon.png';
import navLine from './images/nav-line.png';

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
