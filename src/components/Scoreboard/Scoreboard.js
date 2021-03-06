import React, { Component } from 'react';
import Player from '../Player';
import CompletedSets from '../CompletedSets';
import MatchInfo from '../MatchInfo';
import styles from './styles';


export default class Scoreboard extends Component {

    render() {
        const {
            players,
            completedSets,
            setScore,
            gameScore,
            points,
            onServe,
            status,
            statusDetail,
            finished,
            statusText,
            tvChannel
        } = this.props;

        return (
            <div className="tsb__holder">
                <table className="tsb">
                    <thead>
                        <tr>
                            <th className="tsb__header tsb__tv" colSpan="2">
                                {tvChannel ? tvChannel.channel_title : ''}
                            </th>
                            <th className="tsb__header">Sets</th>
                            <th className="tsb__header">Games</th>
                            <th className="tsb__header">Points</th>
                        </tr>
                    </thead>
                    <tbody>

                        {[0,1].map((index) => {
                            return <Player key = { index }
                                name = { players[index][0].name }
                                onServe = { onServe[index] }
                                setScore = { setScore[index] }
                                gameScore = { gameScore[index] }
                                points = { points[index] }
                            />
                        })}
                    </tbody>
                    <tfoot>
                        {<CompletedSets completedSets = { completedSets }/>}
                        {<MatchInfo info = { statusText }/>}
                    </tfoot>
                </table>

                <style jsx global>
                    {styles}
                </style>

            </div>
        )
    }

}
