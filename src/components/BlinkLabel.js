import React from 'react';

class BlinkLable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showlabel: true,
            label: 'More than halfway there!'
        };
        this.toShow = this.toShow.bind(this);
    }

    componentDidMount() {
        // Make it blink every 500 miliseconds
        setInterval(this.toShow, 500)
    }

    toShow() {
        var sLb = !(this.state.showlabel);
        this.setState({ showlabel: sLb });
    }

    render() {
        return (
            <div>
                {(this.state.showlabel) ?
                    <h4 style={redLabel}>{this.state.label}</h4>
                    :
                    <h4 style={transLabel}>{this.state.label}</h4>}
            </div>
        );
    }

}

export default BlinkLable;

const redLabel = {
    marginTop: 30, 
    fontStyle: 'italic', 
    color: 'red'
}

const transLabel = {
    marginTop: 30, 
    fontStyle: 'italic', 
    // Same color as background to make it invisible
    color: '#282c34'
}
