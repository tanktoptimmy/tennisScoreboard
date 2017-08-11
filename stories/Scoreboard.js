import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import Scoreboard from '../src/components/Scoreboard'
import BallIcon from '../src/components/BallIcon'
import Player from '../src/components/Player'
const data = {
    "_id":"21017707",
    "packetId":210,
    "timestamp":1500654493882,
    "meta": {
        "maxSets": 3,
        "players":[
            ["Lukas Rosol"],
            ["Alexey Vatutin"]
        ],
        "players_mob":[
            [{"name":"L Rosol / L Vuitton","serving":false}],
            [{"name":"A Vatutin / C Murray","serving":true}]
        ]
    },
    "completedSets":[
        [1,7],
        [2,3],
        [3,6],
        [4,6],
        [5,8]
    ],
    "_setScore":[1,1],
    "_gameScore":[0,0],
    "_points":[15,30],
    "_onServe":[1,0],
    "_status":"P",
    "_statusDetail":"point",
    "_finished":"0",
    "provider":"img",
    "_statusText":"",
    "displayed":true,
    "last_update":{
        "$date":{
            "$numberLong":"1500654493902"
        }
    }
}

storiesOf('Tennis Scoreboard', module)
    .add('Scoreboard', () => (
        <Scoreboard
            players = { data.meta.players_mob }
            completedSets = { data.completedSets }
            setScore = { data._setScore }
            gameScore = { data._gameScore }
            points = { data._points }
            onServe = { data._onServe }
            status = { data._status }
            statusDetail = { data._statusDetail }
            finished = { data._finished }
            statusText = { data.statusText }
            tvChannel = { data.tv_channel}
        />
    ))
    .add('Player', () => (
        <table>

                <Player
                    name = { "Sid Vicious" }
                    onServe = { 1 }
                    setScore = { 3 }
                    gameScore = { 4 }
                    points = { 40 }
                />

        </table>
    ))
    .add('Ball Icon', () => (
        <BallIcon/>
    ));



// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
