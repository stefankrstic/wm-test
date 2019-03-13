import './FooterIcon.scss';
import React, { Component } from 'react';

class FooterIcon extends Component {
    render() {
        return (
            <div>
                <div className="FooterIcon">
                    <div>
                        <img src={this.props.icon} alt="Footer" />
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterIcon;
