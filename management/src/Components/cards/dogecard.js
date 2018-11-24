import React from 'react';
import {MQTT_EWBSOCKET_PORT, MQTT_OPTIONS, MQTT_TOPIC, MQTT_WEBSOCKET_ADDRESS} from "Constants/componentSettings";

class Dogecard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_image_src: '',
        };
    }

    render() {
        let images = [
            {img: 'https://cdn.discordapp.com/attachments/515559595255791629/516018870864052248/doggo6.png'},
            {img: 'https://cdn.discordapp.com/attachments/515559595255791629/516018873296748555/doggo5.png'},
            {img: 'https://cdn.discordapp.com/attachments/515559595255791629/516018876790865922/doggo4.png'},
            {img: 'https://cdn.discordapp.com/attachments/515559595255791629/516018880901152768/doggo3.png'},
            {img: 'https://cdn.discordapp.com/attachments/515559595255791629/516018883686039583/doggo2.png'},
            {img: 'https://cdn.discordapp.com/attachments/515559595255791629/516018887637073931/doggo1.png'},
        ]
        let not_allowed_image = 'https://cdn.discordapp.com/attachments/515559595255791629/515967658529652813/unauthorized_doggo.jpg';
        let show_image_src = '';
        if (this.props.dataset) {
            let will_to_live = this.props.dataset.will_to_live;
            let service_allowed = this.props.dataset.service_allowed;
            if (!service_allowed) {
                show_image_src = not_allowed_image;
            } else {
                for (let i = 0; i < images.length; i++) {
                    if (will_to_live === i) {
                        show_image_src = images[i].img;
                    }
                }
            }
        }


        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2  style={{paddingLeft: '20px', paddingTop: '20px'}}>Activity indicator</h2>
                    <hr/>
                    <img src={show_image_src} alt={'doge'} className="img-fluid" style={{padding: '50px'}}/>
                </div>
            </div>

        );
    }
}

export default Dogecard;