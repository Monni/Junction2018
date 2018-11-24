import React from 'react';
import {PRIMARY_COLOR} from "../../Constants/globals/colors";

class ControlCard extends React.Component {
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

    changeButtonState = (e) => {
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
                                <h3 style={{paddingTop: 20, color: '#222010'}}>{this.props.service_name}</h3>
                                <p style={{fontSize: '25px'}}>{this.props.description}</p>
                                <div style={{paddingBottom: '10px'}}>
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

export default ControlCard;