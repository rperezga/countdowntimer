import React from 'react';
import BlinkLabel from './BlinkLabel';

function Description(props) {
  const totalSeconds = props.data.totalSeconds;
  let remainingSeconds = props.data.remainingSeconds;
  
  // When remaining time half the total time
  if (remainingSeconds < totalSeconds / 2) {
    if (remainingSeconds < 1) {
      // When timer finish (remaining time equals 0)
      return (
        <div>
          <h4 style={{ marginTop: 30, fontStyle: 'italic' }}>Time's up!</h4>
        </div>
      );
    } else {
      // The last 10 seconds of the countdown
      if (remainingSeconds >= 1 && remainingSeconds < 10) {
        return (
          <div>
            <BlinkLabel />
          </div>
        );
      } else {
        if (remainingSeconds >= 10 && remainingSeconds < 20) {
          return (
            <div>
              <h4 style={{ marginTop: 30, fontStyle: 'italic', color: 'red' }}>More than halfway there!</h4>
            </div>
          );
        } else {
          return (
            <div>
              <h4 style={{ marginTop: 30, fontStyle: 'italic' }}>More than halfway there!</h4>
            </div>
          );
        }
      }
    }
  } else {
    // When not half time yet
    return (
      <div>
        <h4 style={{ marginTop: 50, fontStyle: 'italic' }}></h4>
      </div>
    )
  }
}

export default Description;
