import './Footer.scss';
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="#link">
                    <div className="icon icon-facebook"> </div>
                </a>
                <a href="#link">
                    <div className="icon icon-twitter"> </div>
                </a>
                <a href="#link">
                    <div className="icon icon-email"> </div>
                </a>
                <div className="Footer-nav desktop-only">
                    <a href="#link"> Home </a> <a href="#link"> About Us </a> <a href="#link"> Our Work </a>
                    <a href="#link"> Contact </a>
                </div>
                <a className="Footer-icon-right" href="#link">
                    <div className="icon icon-arrow"> </div>
                </a>
            </div>
        );
    }
}

export default Footer;
