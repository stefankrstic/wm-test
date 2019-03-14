import './App.scss';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Tile from './Tile';
import Footer from './Footer';
import FooterIcon from './FooterIcon';
import calculatorIcon from './images/calculator-icon.png';
import clockIcon from './images/clock-icon.png';
import cloudIcon from './images/cloud-icon.png';
import heartIcon from './images/heart-icon.png';
import facebookIcon from './images/facebook-icon.png';
import twitterIcon from './images/twitter-icon.png';
import messageIcon from './images/message-icon.png';
import lineUpIcon from './images/line-up-icon.png';
import hatIcon from './images/hat-icon.png';
import likeIcon from './images/like-icon.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                
                
                        <Navbar />
                        <Carousel />
                        {/*<div className="MainText">
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
                        <Footer> 
                        <FooterIcon icon={facebookIcon} />
                        <FooterIcon icon={twitterIcon} />
                        <FooterIcon icon={messageIcon} />
                        <FooterIcon icon={lineUpIcon} />
                        </Footer>*/}
                        
                        
                        
                    
               
            </div>
        );
    }
}

export default App;
