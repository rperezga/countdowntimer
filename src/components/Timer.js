import React from 'react';

function Timer(props) {
    const { minutes, seconds } = props.data
    return (
        <label style={{ fontSize: 200, marginTop: -30 }}>
            <strong>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</strong>
        </label>
    );
}

export default Timer;






