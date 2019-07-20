// React imports
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
