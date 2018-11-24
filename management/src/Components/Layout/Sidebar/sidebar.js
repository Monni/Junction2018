import React from 'react';
import {sidebar} from '../styles';
import {FormattedMessage} from 'react-intl';
import {sidebar_buttons} from "Constants/componentSettings";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let buttons = [];
        for(let i = 0; i < sidebar_buttons.length; i++){
            buttons[i] = <button key={'sidebar-button' + i} className="btn-block" onClick={() => {window.location.href=sidebar_buttons[i].links_to}} style={sidebar.button}><FormattedMessage id={sidebar_buttons[i].id} defaultMessage={sidebar_buttons[i].defaultMessage}/></button>
        }
        return (
            <div className="sidebar container-fluid" style={sidebar.sidebar}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="btn-group-vertical">
                            {buttons}
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Sidebar;