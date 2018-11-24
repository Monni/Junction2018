import React from 'react';
import {FormattedMessage} from 'react-intl';

class FormattedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    reminder = (e) => {
        console.log('ADD FUNCTIONALITY, THIS.PROPS.ONCLICK')
    };

    render() {
        return (
            <button className={this.props.className} style={this.props.style} onClick={this.props.onClick ? this.props.onClick : this.reminder}>
                <FormattedMessage
                    id={this.props.id}
                    defaultMessage={this.props.defaultMessage}
                />
            </button>
        );
    }
}

export default FormattedButton;