import './Tile.scss';
import React, { Component } from 'react';

class Tile extends Component {
    render() {
        return (
            <div>
                <div className="Tile">
                    <div>
                       <img src={this.props.icon} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tile;
