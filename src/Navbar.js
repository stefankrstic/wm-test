import './Navbar.scss';
import React, { Component } from 'react';
import navImageIcon from './images/nav-image.png';

class Navbar extends Component {
    state = {
        showSearch: false,
        showMenu: false,
    };

    toggleSearch = () => {
        this.setState({
            showSearch: !this.state.showSearch,
        });
    };

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        });
    };

    render() {
        return (
            <div>
                <div className="Navbar">
                    <img className="Navbar-logo" src={navImageIcon} alt="NavImage" />
                    <a href="#link" className="Navbar-icon tablet-only">
                        <div className="icon icon-home" />
                    </a>
                    <a href="#link" className="Navbar-icon tablet-only">
                        <div className="icon icon-help" />
                    </a>
                    <a href="#link" className="Navbar-icon tablet-only">
                        <div className="icon icon-hat" />
                    </a>
                    <a href="#link" className="Navbar-icon tablet-only">
                        <div className="icon icon-emails" />
                    </a>
                    <a href="#link" className="Navbar-icon Navbar-nav home desktop-only">
                        Home
                    </a>
                    <span className="desktop-only Navbar-nav"> /</span>
                    <a href="#link" className="Navbar-icon Navbar-nav about-us desktop-only">
                        About Us
                    </a>
                    <span className="desktop-only Navbar-nav"> /</span>
                    <a href="#link" className="Navbar-icon Navbar-nav our-work desktop-only">
                        Our Work
                    </a>
                    <span className="desktop-only Navbar-nav"> /</span>
                    <a href="#link" className="Navbar-icon Navbar-nav contact desktop-only">
                        Contact
                    </a>
                    <div onClick={this.toggleMenu} className="Navbar-icon mobile-only icon icon-menu" />
                    <div onClick={this.toggleSearch} className="Navbar-icon icon icon-search" />
                </div>
                {this.state.showSearch ? (
                    <div className="Navbar-search">
                        <input type="text" />
                    </div>
                ) : null}
                {this.state.showMenu ? (
                    <div className="Navbar-dropdown mobile-only">
                        <a href="#link" className="home">
                            Home
                        </a>
                        <a href="#link" className="about-us">
                            About Us
                        </a>
                        <a href="#link" className="our-work">
                            Our Work
                        </a>
                        <a href="#link" className="contact">
                            Contact
                        </a>
                    </div>
                ) : null}
                {this.state.showMenu ? null : <div className="Navbar-line" />}
            </div>
        );
    }
}

export default Navbar;
