import React from 'react';

class ExplanationCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card shadow-sm" style={{padding: 20}}>
                        <h3>Icon explanations</h3>
                        <i className="fa fa-dollar" style={{padding: 3}}> - <b>Commercial usage</b></i>
                        <i className="fa fa-handshake-o" style={{padding: 3}}> - <b>Data usage</b></i>
                        <i className="fa fa-link" style={{padding: 3}}> - <b>Data linking</b></i>
                        <i className="fa fa-user" style={{padding: 3}}> - <b>Data profiling</b></i>
                        <i className="fa fa-exchange" style={{padding: 3}}> - <b>Data collection</b></i>
                        <i className="fa fa-trash-o" style={{padding: 3}}> - <b>Forget me</b></i>
                    </div>
                </div>
            </div>

        );
    }
}

export default ExplanationCard;