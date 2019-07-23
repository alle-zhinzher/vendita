//React
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import store from '../../store';
//React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Header from '../pageComponents/header/Header';
import Aside from '../pageComponents/aside/Aside';

import Index from '../pages/index/Index';
import About from '../pages/about/About';
import BookList from '../pages/bookList/BookList';
import Footer from '../pageComponents/footer/Footer';

// CSS
import css from './Main.css'


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Header />
                        <Aside />
                        <Route exact path="/" component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/books" component={BookList} />
                    </div>
                </Router>
                <Footer />

            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
