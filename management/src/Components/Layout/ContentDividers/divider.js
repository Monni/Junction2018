import React from 'react';

class Divider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /*
    * PROPS
    * numOfCols
    * components 1 - 6
    *
    * */
    render() {
        let cols = [];
        for(let i = 0; i < this.props.numOfCols; i++){
            cols[i] = <div className={'col-lg-' + this.props.colWidths[i]} key={'col-' + i}>
                {this.props.components[i]}
            </div>
        }
        return (
            <div className="divider  container-fluid">
                <div className="row">
                    {cols}
                </div>
            </div>
        );
    }
}

export default Divider;