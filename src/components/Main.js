import React from 'react';

import Initialize from './Initialize';
import Description from './Description';



class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            firstRun: true,
            disabled: true,
            
            minutes: 0,
            seconds: 0,
            stateDescription: 'More than halfway there!',

            totalSeconds: 0,
            remainingSeconds: 0

        };
    }

    render() {
        return (
            <React.Fragment>
                <Initialize />
                <Description data={{ text: this.state.stateDescription }} />
            </React.Fragment>
        )
    }
}

export default Main;






