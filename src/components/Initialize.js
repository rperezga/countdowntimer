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
                    <label style={{ fontSize: 22 }}><strong>Countdown: </strong></label>
                    <input
                        id='minutes'
                        type='number'
                        placeholder='(Min)'
                        value={this.state.minutes}
                        style={{ marginLeft: 30, fontSize: 22, width: 140 }}
                        onChange={this.handleChange}
                    />
                    {this.state.started ?
                        <button
                            type='button'
                            className='btn btn-danger'
                            style={{ marginLeft: 30, marginTop: -10, width: 80 }}
                            onClick={this.handleClear}
                        >
                            CLEAR
                        </button>
                        :
                        <button
                            type='button'
                            className='btn btn-success'
                            style={{ marginLeft: 30, marginTop: -10, width: 80 }}
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


