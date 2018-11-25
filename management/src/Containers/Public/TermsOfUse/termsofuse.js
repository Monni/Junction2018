import React from 'react';
import {business} from 'Constants/misc/business';
import StaticView from "Components/Views/Static/staticViewContainer";
import {is_public} from "../../../Constants/globals/visibility";
import Divider from "../../../Components/Layout/ContentDividers/divider";

const terms_of_usage_container = <div></div>

class TermsOfUse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="privacy-policy">
                <StaticView public={is_public.terms_of_user}
                            component={
                                <div className="content container-fluid">
                                    <Divider numOfCols={3}
                                             colWidths={[1, 10, 1]}
                                             components={[null, terms_of_usage_container, null]}
                                    />
                                </div>
                            }
                />
            </div>
        );
    }
}

export default TermsOfUse;