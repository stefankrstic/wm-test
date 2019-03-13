import './App.scss';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Tile from './Tile';
import Footer from './Footer';
import calculatorIcon from './images/calculator-icon.svg';
import clockIcon from './images/clock-icon.svg';
import cloudIcon from './images/cloud-icon.svg';
import heartIcon from './images/heart-icon.svg';
import facebookIcon from './images/facebook-icon.svg';
import twitterIcon from './images/twitter-icon.svg';
import messageIcon from './images/message-icon.svg';
import lineUpIcon from './images/line-up-icon.svg';
import hatIcon from './images/hat-icon.svg';
import likeIcon from './images/like-icon.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Navbar />
                        <Carousel />
                        <div className="MainText">
                            <p>WHO WE ARE</p>
                        </div>
                        <Tile icon={hatIcon} />
                        <Tile icon={likeIcon} />
                        <div className="MainText">
                            <p>WHAT WE DO</p>
                        </div>
                            <Tile icon={calculatorIcon} />
                            <Tile icon={clockIcon} />
                            <Tile icon={cloudIcon} />
                            <Tile icon={heartIcon} />
                        
                        <Footer icon={facebookIcon} />
                        <Footer icon={twitterIcon} />
                        <Footer icon={messageIcon} />
                        <Footer icon={lineUpIcon} />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
