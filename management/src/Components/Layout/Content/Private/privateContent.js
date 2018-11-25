import React from 'react';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import {privateContent} from "../../styles";
import Sidebar from "../../Sidebar/sidebar";

class PrivateContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="private-content">
                <Header/>
                <div className="content container-fluid" style={privateContent.content}>
                    <div className="row">
                        <div className="sidebar" style={privateContent.sidebar}>
                            <Sidebar/>
                        </div>
                        <div className="content" style={privateContent.contentContainer}>
                            {this.props.component}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default PrivateContent;