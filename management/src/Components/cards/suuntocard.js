import React from 'react';
import {MQTT_EWBSOCKET_PORT, MQTT_OPTIONS, MQTT_TOPIC, MQTT_WEBSOCKET_ADDRESS} from "Constants/componentSettings";
import {PRIMARY_COLOR} from "../../Constants/globals/colors";

class SuuntoControlCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forgetme: false,
            link: false,
            share: false,
            collection: false,
            commercial: false,
            profiling: false,
            button_enabled: {
                backgroundColor: PRIMARY_COLOR,
                border: 'none',
                margin: '2px',
                width: '55px',
                height: '55px',
                padding: '10px'
            },
            button_disabled: {
                backgroundColor: 'grey',
                border: 'none',
                margin: '2px',
                width: '55px',
                height: '55px',
                padding: '10px'
            },
            enabledStyle: {
                backgroundColor: 'white',
                opacity: '1.0'
            },
            disabledStyle: {
                backgroundColor: 'grey',
                opacity: '0.7'
            }
        };
    }

    componentWillMount() {
        this.setState({
            client: new window.Paho.MQTT.Client(MQTT_WEBSOCKET_ADDRESS, Number(MQTT_EWBSOCKET_PORT), "clientId"),
        })

    }

    componentDidUpdate() {
        if (this.state.link || this.state.share || this.state.collection || this.state.commercial || this.state.profiling) {
            let message = new window.Paho.MQTT.Message('{"suunto": false}');
            message.destinationName = 'sinful_tinderness_core/blockme';
            this.state.client.send(message);
        }
        if (!this.state.link && !this.state.share && !this.state.collection && !this.state.commercial && !this.state.profiling) {
            let message = new window.Paho.MQTT.Message('{"suunto": true}');
            message.destinationName = 'sinful_tinderness_core/blockme';
            this.state.client.send(message);
        }
    }

    componentDidMount() {
        console.log('Mounted')
        this.state.client.onConnectionLost = this.onConnectionLost;
        this.state.client.onMessageArrived = this.onMessageArrived;
        this.state.client.connect({onSuccess: this.onConnect}, MQTT_OPTIONS);
    }

    onConnect = () => {
        console.log('Connected')
    }

    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
        }
    }

    onMessageArrived = (message) => {
        console.log('Message arrived');
        console.log(message.payloadString);
        this.setState({
            dataset: JSON.parse(message.payloadString)
        })
    }

    changeButtonState = (e) => {
        let message = new window.Paho.MQTT.Message("submit virgin blood for response");
        message.destinationName = 'sinful_tinderness_core/ascendancy';
        this.state.client.send(message);
        let status = this.state[e.currentTarget.value];
        status = !status;
        this.setState({
            [e.currentTarget.value]: status,
        })
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card shadow-sm" style={this.state.disabled ? this.state.disabledStyle : this.state.enabledStyle}>
                        <div style={{clear: 'left'}}>
                            <img src={this.props.image_src}
                                 alt={this.props.image_alt}
                                 width={200}
                                 height={200}
                                 style={{padding: '20px', float: 'left'}}
                            />
                            <div>
                                <h1 style={{paddingTop: 20}}>{this.props.service_name}</h1>
                                <p>{this.props.description}</p>
                                <div>
                                    <button className="btn btn-primary"
                                            hidden={this.props.data_commercial_hidden}
                                            value="commercial"
                                            onClick={this.changeButtonState}
                                            style={this.state.commercial ? this.state.button_disabled : this.state.button_enabled}>
                                        <i className="fa fa-dollar fa-2x"></i>
                                    </button>
                                    <button className="btn btn-primary"
                                            hidden={this.props.data_share_hidden}
                                            value="share"
                                            onClick={this.changeButtonState}
                                            style={this.state.share ? this.state.button_disabled : this.state.button_enabled}>
                                        <i className="fa fa-handshake-o fa-2x"></i>
                                    </button>
                                    <button className="btn btn-primary"
                                            hidden={this.props.data_link_hidden}
                                            value="link"
                                            onClick={this.changeButtonState}
                                            style={this.state.link ? this.state.button_disabled : this.state.button_enabled}>
                                        <i className="fa fa-link fa-2x"></i>
                                    </button>
                                    <button className="btn btn-primary"
                                            hidden={this.props.data_profiling_hidden}
                                            onClick={this.changeButtonState}
                                            value="profiling"
                                            style={this.state.profiling ? this.state.button_disabled : this.state.button_enabled}>
                                        <i className="fa fa-user fa-2x"></i>
                                    </button>
                                    <button className="btn btn-primary" hidden={this.props.data_collection_hidden}
                                            onClick={this.changeButtonState} value="collection" style={this.state.collection ? this.state.button_disabled : this.state.button_enabled}><i className="fa fa-exchange fa-2x"></i></button>
                                    <button className="btn btn-danger"
                                            style={this.state.forgetme ? this.state.forget_enabled : this.state.forget_disabled} name="forgetme" onClick={this.changeState}><i className="fa fa-trash-o fa-2x"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SuuntoControlCard;