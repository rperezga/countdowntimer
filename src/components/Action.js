import React from 'react';
import { RiPauseCircleLine, RiPlayCircleLine } from 'react-icons/ri';

class Action extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.data.started ?
                    <>
                        {this.props.data.running ?
                            <RiPauseCircleLine
                                style={{ fontSize: 100, color: '#FABCA2' }}
                                onClick={() => this.props.handleActionPause()}
                            />
                            :
                            <RiPlayCircleLine
                                style={{ fontSize: 100, color: '#C0FAA2' }}
                                onClick={() => this.props.handleActionStart()}
                            />
                        }
                    </>
                    : null}
            </React.Fragment>
        )
    }
}

export default Action;