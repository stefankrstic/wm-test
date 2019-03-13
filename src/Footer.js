import './Footer.scss';
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="Footer">
                    <div>
                        <img src={this.props.icon} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
