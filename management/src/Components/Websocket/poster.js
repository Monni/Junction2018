import {subscribe} from 'mqtt-react';
import React from "react";

// Messages are passed on the "data" prop


class ViewMessages extends React.Component {
    MessageList = (props) => {
        return (
            <ul>
                {props.data.map(message => <li>{message}</li>)}
            </ul>
        )
    }

    render() {
        return (
            <ul>
                {this.MessageList}
            </ul>
        )
    }
}

// simple subscription to messages on the "@test/demo" topic
export default subscribe({
    topic: '@demo/test'
})(ViewMessages)