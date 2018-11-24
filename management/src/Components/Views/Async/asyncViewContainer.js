import React from 'react';
import PublicContent from 'Components/Layout/Content/Public/publicContent';
import PrivateContent from 'Components/Layout/Content/Private/privateContent';
import ErrorHandler from 'Components/Handlers/ErrorHandler/errorHandler';
import Loader from 'Components/Handlers/Loader/loader';
import {asyncViewContainer} from "../styles";

class AsyncView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    PROPS
        public = true / false, defines if content contains sidebar or not
        error = true / false
        fetching = true / false
        fetched = true / false
        component = component
     */

    render() {
        if (this.props.error) {
            return (
                <div className="error-handler" style={asyncViewContainer.errorHandler}>
                    {this.props.public ? <PublicContent component={<ErrorHandler/>}/> : <PrivateContent component={<ErrorHandler/>}/>}
                </div>
            );
        }
        if (this.props.fetching) {
            return (
                <div className="fetching-handler" style={asyncViewContainer.fetching}>
                    {this.props.public ? <PublicContent component={<Loader/>}/> : <PrivateContent component={<Loader/>}/>}
                </div>
            );
        }
        if (this.props.fetched) {
            return (
                <div className="fetched-handler" style={asyncViewContainer.fetched}>
                    {this.props.public ? <PublicContent component={this.props.component}/> : <PrivateContent component={this.props.component}/>}
                </div>
            );
        }
        else {
            return (
                <div className="blank-handler" style={asyncViewContainer.blank}>

                </div>
            );
        }
    }
}

export default AsyncView;