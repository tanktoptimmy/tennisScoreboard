import React, { Component } from 'react';

import styles from './styles';

export default class CompletedSets extends Component {
    render() {
        const { completedSets } = this.props;
        const sets = completedSets.slice(0,-1).map((set) => {
            return `${set[0]} - ${set[1]}`
        }).join(' / ');
        return <tr>
                <td colSpan="100%" className="tsb__sets">
                    <span className="tsb__sets-title">Previous Sets:</span>
                    <span>{sets}</span>
            </td>
            <style jsx>
                {styles}
            </style>
        </tr>
    }

}