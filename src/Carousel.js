import './Carousel.scss';
import React, { Component } from 'react';
import carouselCover from './images/carousel-cover.svg';
import carouselImage from './images/carousel-image.svg';
import carouselLeft from './images/carousel-left.svg';
import carouselRight from './images/carousel-right.svg';

class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="Carousel">
                    <img className="CarouselCover" src={carouselCover} alt="CarouselCover" />
                    <img className="CarouselImage" src={carouselImage} alt="CarouselImage" />
                </div>

                <div className="CarouselMove">
                    <img className="CarouselLeft" src={carouselLeft} alt="CarouselLeft" />
                    <p>LOREM IPSUM DOLAR SIT</p>
                    <img className="CarouselRight" src={carouselRight} alt="CarouselRight" />
                </div>
            </div>
        );
    }
}

export default Carousel;
