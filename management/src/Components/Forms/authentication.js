import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {PASSWORD_IDENTIFIER, USERNAME_IDENTIFIER} from "../../Constants/globals/identifiers";
import {forms} from './styles';
import {authenticate} from "ActionCreators/user";

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (username, password) => dispatch(authenticate(username, password))
    }
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            [PASSWORD_IDENTIFIER]: '',
            [USERNAME_IDENTIFIER]: '',
        };
    }

    onChange = (e) => {
        console.log(this.state[PASSWORD_IDENTIFIER]);
        console.log(this.state[USERNAME_IDENTIFIER]);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        this.props.authenticate(this.state[USERNAME_IDENTIFIER], this.state[PASSWORD_IDENTIFIER]);
    }
    render() {
        return (
            <div className="authentication-form" style={forms.authentication.container}>
                <div className="card" style={forms.authentication.card}>
                    <h3><FormattedMessage id="content.component.form.heading.sign_in" defaultMessage={'Sign in'}/></h3>
                    <label><FormattedMessage id="content.component.form.username" defaultMessage={'Username'}/></label>
                    <input type="text" className="form-control" name={USERNAME_IDENTIFIER} onChange={this.onChange} style={forms.authentication.input}/>
                    <br/>
                    <label><FormattedMessage id="content.component.form.password" defaultMessage={'Password'}/></label>
                    <input type="password" className="form-control" name={PASSWORD_IDENTIFIER} onChange={this.onChange} style={forms.authentication.input}/>
                    <br/>
                    <button className="btn btn-success btn-block" style={forms.authentication.button} onClick={this.submit}><FormattedMessage id="content.component.form.button.sign_in" defaultMessage={'Sign in'}/></button>
                </div>
            </div>
        );

    }
}

const AuthenticationForm = connect(null, mapDispatchToProps)(Form)
export default AuthenticationForm;