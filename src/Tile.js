import './Tile.scss';
import React, { Component } from 'react';

class Tile extends Component {
    render() {
        return (
            
                <div className="Tile">

                       <div className={this.props.icon} alt="Tile"/>
                   
                </div>
            
        );
    }
}

export default Tile;
