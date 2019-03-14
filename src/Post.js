import React, { Component } from 'react';
import Tile from './Tile';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <Tile icon={this.props.icon} />
                <div className="Post-content mobile-hide">
                    <div className="Post-title"> {this.props.title} </div>
                    <div className="Post-text"> {this.props.children} </div>
                    <a href="#link">
                        <div className="content-link" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Post;
