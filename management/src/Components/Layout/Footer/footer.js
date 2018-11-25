import React from 'react';
import {footer} from '../styles';
import Divider from "../ContentDividers/divider";
import '../../../../node_modules/font-awesome/css/font-awesome.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="footer" style={footer.footer.footer}>
                    <Divider numOfCols={1}
                             colWidths={[12]}
                             components={[<div></div>]}
                    />
                </div>

            </div>
        );
    }
}

export default Footer;