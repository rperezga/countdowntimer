import React from 'react';

import Initialize from './Initialize';
import Description from './Description';
import Timer from './Timer';



class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            running: false,            
            minutes: 0,
            seconds:0,
            stateDescription: 'More than halfway there!',

            totalSeconds: 0,
            remainingSeconds: 0,

            speed: 1000

        };
    }

    initializeTimer = (minutes) => {
        this.setState({
            minutes,
            totalSeconds: minutes * 60,
            remainingSeconds: minutes * 60
        })
        this.handleStart()
    }

    handleStart = () => {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, this.state.speed )
    }

    render() {
        return (
            <React.Fragment>
                <Initialize handleInitializeTimer={this.initializeTimer.bind(this)} />
                <Description data={{ text: this.state.stateDescription }} />
                <Timer data={{ minutes: this.state.minutes, seconds: this.state.seconds }} />
            </React.Fragment>
        )
    }
}

export default Main;






