import React from 'react';

function Timer(props) {
    const { minutes, seconds } = props.data
    return (
        <label style={timerLabel}>
            <strong>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</strong>
        </label>
    );
}

export default Timer;

const timerLabel = {
    fontSize: 200, 
    marginTop: -30
}