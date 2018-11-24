import React from 'react';
import ReactLoading from 'react-loading';
import {PRIMARY_COLOR} from "Constants/globals/colors";
import {LOADER_HEIGHT, LOADER_STYLE, LOADER_WIDTH} from "Constants/componentSettings";

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: LOADER_STYLE,
            color: PRIMARY_COLOR,
            height: LOADER_HEIGHT,
            width: LOADER_WIDTH,
        };
    }
    render() {
        return (
            <div className="loader">
                <ReactLoading
                    type={this.props.type ? this.props.type : this.state.loader}
                    color={this.state.color}
                    height={this.props.height ? this.props.height : this.state.height}
                    width={this.props.width ? this.props.height : this.state.height}
                />
            </div>
        );

    }
}

export default Loader;