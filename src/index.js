import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Scoreboard from './components/Scoreboard';


export default function(
    obj
) {
    function renderApp() {

        const data = obj.reactData;
        console.log(data)
        render(
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
                />,
            obj.domNode
        );
    }

    renderApp();

    return {
        destroy() {
            unmountComponentAtNode(obj.domRoot);
        }
    };
}
