// React imports
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../store';

//Components
import TestComponent from './test/TestComponent'


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <TestComponent />
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
