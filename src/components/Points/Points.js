import React, { Component } from 'react';
import points from './styles';
export default class Points extends Component {
    render() {
        return <div className="tsb__points">
            {this.props.points}
            <style jsx>
                    {points}
            </style>
        </div>;
    }

}
