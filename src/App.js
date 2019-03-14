import './App.scss';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Tile from './Tile';
import Footer from './Footer';
import Post from './Post';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Carousel />
                <div className="App-content">
                    <p className="MainText">WHO WE ARE</p>
                    <Post icon="icon icon-hat-big" title="Lorem ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </Post>
                    <Post icon="icon icon-like" title="Lorem ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </Post>
                    <p className="MainText">WHAT WE DO</p>
                    <div className="App-row">
                        <Tile icon="icon icon-calc" />
                        <Tile icon="icon icon-clock" />
                    </div>
                    <div className="App-row">
                        <Tile icon="icon icon-cloud" />
                        <Tile icon="icon icon-heart" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
