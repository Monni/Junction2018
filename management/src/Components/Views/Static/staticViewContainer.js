import React from 'react';
import PublicContent from 'Components/Layout/Content/Public/publicContent';
import PrivateContent from 'Components/Layout/Content/Private/privateContent';
import {staticViewContainer} from "../styles";

class StaticView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    PROPS
        component = component
     */

    render() {
        return (
            <div className="static-handler" style={this.props.style ? this.props.style : staticViewContainer.static}>
                {this.props.public ? <PublicContent component={this.props.component}/> : <PrivateContent component={this.props.component}/>}
            </div>
        );
    }
}

export default StaticView;