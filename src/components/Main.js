import React from 'react';

import Initialize from './Initialize';
import Description from './Description';
import Timer from './Timer';
import Action from './Action';
import Speed from './Speed';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            started: false,
            running: false,
            minutes: 0,
            seconds: 0,

            totalSeconds: 0,
            remainingSeconds: 0,

            speed: 1000
        };
    }

    initializeTimer = (minutes) => {
        this.setState({
            minutes,
            totalSeconds: minutes * 60,
            remainingSeconds: minutes * 60,
            started: true,
            running: true
        })
        this.handleStart()
    }

    // To handle the countdown timer
    handleStart = () => {
        this.setState({ running: true })
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                // Decrement seconds
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    // Clear my interval when timer get 0
                    clearInterval(this.myInterval)
                } else {
                    // Decrement minutes when seconds get 0
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
            this.setState({
                remainingSeconds: this.state.remainingSeconds - 1
            })
        }, this.state.speed)
    }

    handlePause = () => {
        // Clear interval when Pause button push
        this.setState({ running: false }, () => {
            clearInterval(this.myInterval)
        })
    }

    handleSpeedChange = (speed) => {
        // Change my speed countdown
        this.setState({ speed }, () => {
            clearInterval(this.myInterval)
            this.handleStart()
        })
    }

    resetTimer = () => {
        this.setState({
            started: false,
            running: false,
            minutes: 0,
            seconds: 0,

            totalSeconds: 0,
            remainingSeconds: 0,

            speed: 1000
        }, () => {
            clearInterval(this.myInterval)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Initialize
                    handleInitializeTimer={this.initializeTimer.bind(this)}
                    handleResetTimer={this.resetTimer.bind(this)}
                />
                <Description
                    data={{
                        totalSeconds: this.state.totalSeconds,
                        remainingSeconds: this.state.remainingSeconds
                    }}
                />
                <div className='container'>
                    <div className='row'>
                        <div className='col-8' style={leftCol}>
                            <Timer
                                data={{ minutes: this.state.minutes, seconds: this.state.seconds }}
                            />
                        </div>
                        <div className='col-4' style={rightCol}>
                            <Action
                                data={{ started: this.state.started, running: this.state.running }}
                                handleActionStart={this.handleStart.bind(this)}
                                handleActionPause={this.handlePause.bind(this)}
                            />
                        </div>
                    </div>
                </div>
                <Speed
                    data={{ running: this.state.running, speed: this.state.speed }}
                    handleChangeSpeed={this.handleSpeedChange.bind(this)}
                />

            </React.Fragment>
        )
    }
}

export default Main;

const leftCol = {
    textAlign: 'right'
}
const rightCol = {
    marginTop: 80,
    textAlign: 'left',
    paddingLeft: 50
}