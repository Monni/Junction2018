import React from 'react';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import {publicContent} from '../../styles';

class PublicContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //TODO Header, footer, Content layout and styling
        return (
            <div className="public-content">
                <Header/>
                <div className="content" style={publicContent.content}>
                    {this.props.component}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default PublicContent;