//React
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import store from '../store';
//React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Header from './header/Header';
import Index from './index/Index';
import About from './about/About';
import BookList from './bookList/BookList';
import TestComponent from './test/TestComponent';


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Route exact path="/" component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={TestComponent} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
