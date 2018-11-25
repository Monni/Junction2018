import React from 'react';
import Divider from "Components/Layout/ContentDividers/divider";
import AsyncView from "../../../Components/Views/Async/asyncViewContainer";
import ProjectionChart from "../../../Components/Charts/testChart";
import {MQTT_EWBSOCKET_PORT, MQTT_OPTIONS, MQTT_TOPIC, MQTT_WEBSOCKET_ADDRESS} from "Constants/componentSettings";
import PiirakkaChart from "../../../Components/Charts/piechart";
import Piirakka2Chart from "../../../Components/Charts/piechart2";
import Dogecard from "../../../Components/cards/dogecard";
import {MQTT_DOGE_TOPIC} from "../../../Constants/componentSettings";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.setState({
            client: new window.Paho.MQTT.Client(MQTT_WEBSOCKET_ADDRESS, Number(MQTT_EWBSOCKET_PORT), "clientId"),
        })

    }

    componentDidMount() {
        console.log('Mounted')
        this.state.client.onConnectionLost = this.onConnectionLost;
        this.state.client.onMessageArrived = this.onMessageArrived;
        this.state.client.connect({onSuccess: this.onConnect}, MQTT_OPTIONS);
    }

    onConnect = (client) => {
        this.state.client.subscribe(MQTT_TOPIC);
        this.state.client.subscribe(MQTT_DOGE_TOPIC);
        let message = new window.Paho.MQTT.Message("submit virgin blood for response");
        message.destinationName = 'sinful_tinderness_core/ascendancy';
        this.state.client.send(message);
    }

    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
        }
    }

    onMessageArrived = (message) => {
        console.log('Message arrived');
        console.log(message.destinationName);
        if (message.destinationName === MQTT_TOPIC) {
            this.setState({
                dataset: JSON.parse(message.payloadString)
            })
        } else {
            this.setState({
                doggydata: JSON.parse(message.payloadString),
            })
        }

    }


    render() {

        return (
            <div className="dashboard">
                <AsyncView public={false} fetched={true}
                           component={
                               <div className="content container-fluid">
                                   <Divider numOfCols={1}
                                            colWidths={[12]}
                                            components={[
                                                <div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="card">
                                                                <h2 style={{paddingLeft: '20px', paddingTop: '20px'}}>Overall</h2>
                                                                <hr/>
                                                                <ProjectionChart dataset={this.state.dataset} width={600} height={250}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="card">
                                                                <Dogecard dataset={this.state.doggydata}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="card">
                                                                <h2 style={{paddingLeft: '20px', paddingTop: '20px'}}>Step count</h2>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                                                                                                <div style={{margin: '15px'}}>
                                                                            <div className="row" style={{marginLeft: '10px'}}><div style={{backgroundColor: 'green', width:20, height: 20, marginTop: 5}}></div><p style={{paddingLeft: '10px', fontSize: 18}}>Walked so far</p></div>
                                                                            <div className="row" style={{marginLeft: '10px'}}><div style={{backgroundColor: 'red', width:20, height: 20, marginTop: 5}}></div><p style={{paddingLeft: '10px', fontSize: 18}}>Missing from goal</p></div>
                                                                        </div>
                                                                                                                                            </div>
                                                                    <div className="col-lg-6">
                                                                        <PiirakkaChart dataset={this.state.dataset}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br/>
                                                            <div className="card">
                                                                <h2 style={{paddingLeft: '20px', paddingTop: '20px'}}>Transportation carbon footprint</h2>
                                                                <hr/>
                                                                 <div className="row">
                                                                    <div className="col-lg-6" style={{paddingLeft: '10px'}}>
                                                                        <div style={{margin: '15px'}}>
                                                                            <div className="row" style={{marginLeft: '10px'}}><div style={{backgroundColor: 'green', width:20, height: 20, marginTop: 5}}></div><p style={{paddingLeft: '10px', fontSize: 18}}>By foot</p></div>
                                                                            <div className="row" style={{marginLeft: '10px'}}><div style={{backgroundColor: 'yellow', width:20, height: 20, marginTop: 5}}></div><p style={{paddingLeft: '10px', fontSize: 18}}>Public</p></div>
                                                                            <div className="row" style={{marginLeft: '10px'}}><div style={{backgroundColor: 'red', width:20, height: 20, marginTop: 5}}></div><p style={{paddingLeft: '10px', fontSize: 18}}>Private</p></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <Piirakka2Chart dataset={this.state.dataset}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ]}
                                   />
                               </div>
                           }
                />
            </div>
        );
    }
}

export default Dashboard;