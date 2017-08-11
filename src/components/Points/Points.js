import React, { Component } from 'react';
import points from './styles';
export default class Points extends Component {
    constructor(props) {
        super(props);
        this.state = { animating: false};
    }

    componentDidMount() {
        this.elmPoints.addEventListener("animationend", () =>
            this.setState({ animating: false }));
    }

    componentWillUpdate(nextProps) {
        const prevPoints = this.props.points;
        const newPoints = nextProps.points;

        const { animating } = this.state;

        if (prevPoints != newPoints && !animating) {
            this.setState({ animating: true });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const prevPoints = this.props.points;
        const newPoints = nextProps.points;
        return prevPoints != newPoints;
    }

    render() {
        const pointStyle = this.state.animating ? "tsb__points tsb__points-animating" : "tsb__points"
        return <div className={pointStyle} ref={elm => this.elmPoints = elm}>
            {this.props.points}
            <style jsx>
                    {points}
            </style>
        </div>;
    }

}
