import React from 'react';

class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
            return (
                <div className="error-handler">
                    <p>Error</p>
                </div>
            );
    }
}

export default ErrorHandler;