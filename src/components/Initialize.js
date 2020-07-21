import React from 'react';

class Initialize extends React.Component {

    constructor() {
        super();
        this.state = {
            startBtnDisabled: true,
            started: false,
            minutes: ''
        };
    }

    handleChange = (event) => {
        event.target.id === 'minutes' && this.setState({ minutes: event.target.value }, () => {
            this.state.minutes > 0 ? this.setState({ startBtnDisabled: false }) : this.setState({ startBtnDisabled: true })
            this.state.minutes.length === 0 && this.setState({ minutes: 0 })
        });
    }

    handleStart = () => {
        this.setState({ started: true })
        this.props.handleInitializeTimer(this.state.minutes)
    }

    handleClear = () => {
        this.setState({
            startBtnDisabled: true,
            started: false,
            minutes: ''
        }, () => this.props.handleResetTimer())
    }

    render() {
        return (
            <div>
                <div>
                    <label style={countLabel}><strong>Countdown: </strong></label>
                    <input
                        id='minutes'
                        type='number'
                        placeholder='(Min)'
                        value={this.state.minutes}
                        style={minTxt}
                        onChange={this.handleChange}
                    />
                    {this.state.started ?
                        <button
                            type='button'
                            className='btn btn-danger'
                            style={clearBtn}
                            onClick={this.handleClear}
                        >
                            CLEAR
                        </button>
                        :
                        <button
                            type='button'
                            className='btn btn-success'
                            style={startBtn}
                            disabled={this.state.startBtnDisabled}
                            onClick={this.handleStart}
                        >
                            START
                        </button>
                    }
                </div>
            </div>
        )
    }
}

export default Initialize;

const countLabel = {
    fontSize: 22
}
const minTxt = {
    marginLeft: 30, 
    fontSize: 22, 
    width: 140
}
const clearBtn = {
    marginLeft: 30, 
    marginTop: -10, 
    width: 80
}
const startBtn = {
    marginLeft: 30, 
    marginTop: -10, 
    width: 80
}


