import React from 'react';

class Speed extends React.Component {

    constructor() {
        super();
        this.state = {
            speed: 1000
        };
    }

    render() {
        return (
            <div style={body}>
                <div className='row'>
                    {this.props.data.running &&
                        <>
                            <div className='col'>
                                <button 
                                    type='button' 
                                    className={`btn btn-${this.props.data.speed === 1000 ? 'success' : 'secondary'}`} 
                                    style={btn}
                                    onClick={() => this.props.handleChangeSpeed(1000)}
                                >
                                    1 X
                                </button>
                            </div>
                            <div className='col'>
                                <button 
                                    type='button' 
                                    className={`btn btn-${this.props.data.speed === 750 ? 'success' : 'secondary'}`}
                                    style={btn}
                                    onClick={() => this.props.handleChangeSpeed(750)}
                                >
                                    1.5 X
                                </button>
                            </div>
                            <div className='col'>
                                <button 
                                    type='button' 
                                    className={`btn btn-${this.props.data.speed === 500 ? 'success' : 'secondary'}`} 
                                    style={btn}
                                    onClick={() => this.props.handleChangeSpeed(500)}
                                >
                                    2 X
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default Speed;

const body = {
    width: 350,
    height: 60
}

const btn = {
    width: 90
}




