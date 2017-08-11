import React, { Component } from 'react';

import styles from './styles';

export default class MatchInfo extends Component {
    render() {
        const { info } = this.props;

        return <tr>
                <td colSpan="100%" className="tsb__info">
                    <span className="tsb__info-title">Match Info:</span>
                    <span>{info}</span>
            </td>
            <style jsx>
                {styles}
            </style>
        </tr>
    }

}