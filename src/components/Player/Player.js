import React, { Component } from 'react';
import Points from '../Points';
import BallIcon from '../BallIcon';

import player from './styles';

export default class Player extends Component {
    render() {
        const { name, onServe, setScore, gameScore, points } = this.props
        return <tr className="tsb__player">
                <td className="tsb__heading" scope="row">
                    {
                        name.split('/').map((nam, idx)=>{
                            return <div key={idx} className="tsb__name">{nam}</div>
                        })
                    }
                </td>
                <td className="tsb__ball-holder"><span className="tsb__ball">{onServe == '1' && <BallIcon/>}</span></td>
                <td className="tsb__points-holder"><Points points = { setScore }/></td>
                <td className="tsb__points-holder"><Points points = { gameScore }/></td>
                <td className="tsb__points-holder"><Points points = { points }/></td>
                 <style jsx global>
                    {player}
                </style>
            </tr>
    }

}
