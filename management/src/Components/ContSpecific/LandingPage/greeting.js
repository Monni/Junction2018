import React from 'react';
import Divider from "../../Layout/ContentDividers/divider";
import {greetings} from "./styles";

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="greetings">
                <Divider numOfCols={3}
                         colWidths={[1,10,1]}
                         components={[null,<div style={greetings.text.container}><p style={greetings.text.text}>This is a placeholder text</p></div>,null]}
                />
            </div>
        );

    }
}

export default Greetings;