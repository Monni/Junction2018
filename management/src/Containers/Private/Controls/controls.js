import React from 'react';
import Divider from "Components/Layout/ContentDividers/divider";
import AsyncView from "../../../Components/Views/Async/asyncViewContainer";
import ControlCard from "../../../Components/cards/controlcard";
import ExplanationCard from "../../../Components/cards/explanationcard";
import SuuntoControlCard from "../../../Components/cards/suuntocard";


class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                                    <h2><u>Featured</u></h2>
                                                    <br/>
                                                    <SuuntoControlCard
                                                        service_name={'Suunto'}
                                                        description={'Trusted by professionals, Suunto manufactures world renowned sports watches, dive computers and precision instruments for the toughest conditions.'}
                                                        image_src={'https://www.suunto.com/Static/img/suunto-200x200pix.png?width=1200'}
                                                        image_alt={'Suunto'}
                                                        data_link_hidden={false}
                                                        data_share_hidden={false}
                                                        data_collection_hidden={false}
                                                        data_commercial_hidden={true}
                                                        data_profiling_hidden={true}
                                                    />
                                                    <br/>
                                                    <h2><u>City services</u></h2>
                                                    <br/>
                                                    <ControlCard
                                                        service_name={'HelMet kirjasto'}
                                                        description={'Espoon, Helsingin, Kauniaisten ja Vantaan kaupunginkirjastot.'}
                                                        image_src={"https://pbs.twimg.com/profile_images/722716169627701248/V7cjRkeu_400x400.jpg"}
                                                        image_alt={'facebook'}
                                                        data_link_hidden={false}
                                                        data_share_hidden={true}
                                                        data_collection_hidden={false}
                                                        data_commercial_hidden={true}
                                                        data_profiling_hidden={true}
                                                    />
                                                    <br/>
                                                    <ControlCard
                                                        service_name={'Helsingin ja Uudenmaan sairaanhoitopiiri'}
                                                        description={'Suomen suurin sairaanhoitopiiri ja toiseksi suurin työnantaja. HUS-kuntayhtymän palveluksessa on 21 700 henkilöä'}
                                                        image_src={'https://www.itewiki.fi/write/post_images/13443.png'}
                                                        image_alt={'HUS'}
                                                        data_link_hidden={false}
                                                        data_share_hidden={true}
                                                        data_collection_hidden={true}
                                                        data_commercial_hidden={true}
                                                        data_profiling_hidden={true}
                                                    />
                                                    <br/>
                                                    <h1>Commercial Services</h1>
                                                    <br/>
                                                    <ControlCard
                                                        service_name={'Facebook'}
                                                        description={'Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don\'t know, online.'}
                                                        image_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"}
                                                        image_alt={'facebook'}
                                                        data_link_hidden={false}
                                                        data_share_hidden={false}
                                                        data_collection_hidden={false}
                                                        data_commercial_hidden={false}
                                                        data_profiling_hidden={false}
                                                    />
                                                    <br/>
                                                    <ControlCard
                                                        service_name={'LinkedIn'}
                                                        description={'Keep in touch with people you know, share ideas, and build your career.'}
                                                        image_src={"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"}
                                                        image_alt={'linkedin'}
                                                        data_link_hidden={false}
                                                        data_share_hidden={false}
                                                        data_collection_hidden={false}
                                                        data_commercial_hidden={false}
                                                        data_profiling_hidden={false}
                                                    />

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

export default Controls;