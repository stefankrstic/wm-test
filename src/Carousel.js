import './Carousel.scss';
import React, { Component } from 'react';
import carouselImage from './images/carousel-image.png';
import carouselLeft from './images/carousel-left.png';
import carouselRight from './images/carousel-right.png';

class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="Carousel">
                    <div>
                        <img className="CarouselImage" src={carouselImage} alt="CarouselImage" />
                    </div>
                    <p className="CarouselImageText tablet-only"> LOREM IPSUM DOLAR SIT </p>
                    <p className="CarouselImageText desktop-only"> LOREM IPSUM DOLAR SIT </p>
                </div>
                <div className="mobile-only">
                    <div className="CarouselMove mobile-only">
                        <img className="CarouselLeft" src={carouselLeft} alt="CarouselLeft" />
                        <p className="CarouselText"> LOREM IPSUM DOLAR SIT </p>
                        <img className="CarouselRight" src={carouselRight} alt="CarouselRight" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
