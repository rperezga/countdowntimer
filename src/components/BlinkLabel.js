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
                    <h4 style={{ marginTop: 30, fontStyle: 'italic', color: 'red' }}>More than halfway there!</h4>
                    :
                    <h4 style={{ marginTop: 30, fontStyle: 'italic', color: '#282c34' }}>More than halfway there!</h4>}
            </div>
        );
    }

}

export default BlinkLable;
