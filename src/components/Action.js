import React from 'react';
import { RiPauseCircleLine, RiPlayCircleLine } from 'react-icons/ri';

function Action(props) {

    return (
        <React.Fragment>
            {props.data.started ?
                // If already start my countdown show Play / Pause button
                <>
                    {props.data.running ?
                        <RiPauseCircleLine
                            style={pauseBtn}
                            onClick={() => props.handleActionPause()}
                        />
                        :
                        <RiPlayCircleLine
                            style={playBtn}
                            onClick={() => props.handleActionStart()}
                        />
                    }
                </>
                : null
            }
        </React.Fragment>
    )

}

export default Action;

const pauseBtn = {
    fontSize: 100, 
    color: '#FABCA2'
}

const playBtn = {
    fontSize: 100, 
    color: '#C0FAA2'
}