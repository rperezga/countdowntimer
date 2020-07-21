import React from 'react';

import Initialize from './Initialize';



class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            firstRun: true,
            disabled: true,
            
            minutes: 0,
            seconds: 0
        };
    }

    render() {
        return (
            <React.Fragment>
                <Initialize />
            </React.Fragment>
        )
    }
}

export default Main;






