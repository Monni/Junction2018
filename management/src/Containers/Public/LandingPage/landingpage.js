import React from 'react';
import StaticView from "Components/Views/Static/staticViewContainer";
import {is_public} from "../../../Constants/globals/visibility";
import Divider from "../../../Components/Layout/ContentDividers/divider";
import {DASHBOARD_PATH} from "Constants/paths/local_paths";
import {landingPage} from "./styles";
import {ELEMENT_COLOR, PRIMARY_COLOR} from "../../../Constants/globals/colors";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="landing-page">
                <StaticView public={is_public.landing_page} style={landingPage.background}
                            component={
                                <div className="content container-fluid" style={landingPage.content}>
                                    <Divider numOfCols={1}
                                             colWidths={[12]}
                                             components={[
                                                 <div className="row">
                                                     <div className="col-lg-5 offset-1">
                                                         <div className="card border-light shadow-lg" style={{padding: 50}}>
                                                             <h1 className="text-center">Sign in</h1>
                                                             <p className="text-center" style={{fontSize: 25}}>Bring services around your data</p>
                                                             <label>ID</label>
                                                             <input type={'text'} className="form-control"/>
                                                             <br/>
                                                             <label>Password</label>
                                                             <input type={"password"} className="form-control"/>
                                                             <br/>
                                                             <button style={{backgroundColor: PRIMARY_COLOR, border: 'none'}} className="btn btn-primary" onClick={(e) => {
                                                                 window.location.href = DASHBOARD_PATH
                                                             }}>Sign in
                                                             </button>
                                                         </div>
                                                     </div>
                                                     <div className="col-lg-4 offset-2">
                                                     <img className="pull-center" src={'http://www.clker.com/cliparts/M/J/W/t/H/X/yellow-fingerprint.svg.med.png'} width="70%" height="auto"/>
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

export default LandingPage;