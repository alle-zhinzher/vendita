// React imports
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../store';

//Components
import testComponent from './testComponent/test'

export default class App extends Component {

    render() {
        return (
            <Provider>
                <testComponent />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
