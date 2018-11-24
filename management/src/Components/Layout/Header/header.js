import React from 'react';
import {connect} from 'react-redux';
import {header} from '../styles';
import {LANDING_PAGE_PATH} from "../../../Constants/paths/local_paths";
import {logout} from "../../../ActionCreators/user";
import FormattedButton from "../../Buttons/Header-SignIn/signInButton";
import {ELEMENT_COLOR, PRIMARY_COLOR} from "../../../Constants/globals/colors";

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false,
        };
    }

    handleDropdown = (e) => {
        if (this.state.dropdownVisible) {
            this.setState({dropdownVisible: false});
        } else {
            this.setState({dropdownVisible: true})
        }
    }

    handleLogout = (e) => {
        this.props.logout()
    }

    render() {
        let button =
            <FormattedButton className={"btn btn-success pull-right"}
                             style={header.loginButton}
                             id={"header.button.sign_in"}
                             defaultMessage={'Sign in'}
            />;
        return (
            <div className="header container-fluid" style={header.header}>
                <div className="row">
                    <div className="col-fixed-left">
                        <a href={LANDING_PAGE_PATH} style={{color: 'white', fontSize: 40, paddingLeft: 50, paddingTop: 20}}>DIGITAL</a><a style={{color: PRIMARY_COLOR, fontSize: 40, paddingRight: '20px'}}>TWIN</a>
                    </div>
                </div>


            </div>
        );
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export default Header;