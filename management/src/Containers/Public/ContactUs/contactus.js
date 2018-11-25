import React from 'react';
import StaticView from "Components/Views/Static/staticViewContainer";
import {is_public} from "Constants/globals/visibility";
import Divider from "Components/Layout/ContentDividers/divider";
import {business} from 'Constants/misc/business';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(business.contacts);
        let contacts = [];
        for (let i = 0; i < business.contacts.length; i++) {
            contacts[i] =
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-8 offset-2">
                            <div className="card shadow-sm text-center" style={{padding: '30px', marginTop: '50px'}}>
                                <div>
                                    <img src={require('Images/person.png')} width={300} height={300} style={{border: 'solid 1px black'}}/>
                                </div>
                                <div style={{paddingLeft: '20px'}}>
                                    <h5>{business.contacts[i].first_name + ' ' + business.contacts[i].last_name}</h5>
                                    <b>{business.contacts[i].title}</b>
                                    <p>{business.contacts[i].phone_number}</p>
                                    <p>{business.contacts[i].email}</p>
                                    <div className="btn-group">
                                        <button className="btn btn-link"><i className="fa fa-facebook fa-2x"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-linkedin fa-2x"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-twitter fa-2x"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-google-plus fa-2x"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-twitch fa-2x"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
        let contact_information = <div className="row">{contacts}</div>
        return (
            <div className="contact-us">
                <StaticView public={is_public.contact_us}
                            component={
                                <div className="content container-fluid">
                                    <Divider numOfCols={3}
                                             colWidths={[1, 10, 1]}
                                             components={[null, contact_information, null]}
                                    />
                                </div>
                            }
                />
            </div>
        );
    }
}

export default ContactUs;