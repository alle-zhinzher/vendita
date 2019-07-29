//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
//Redux
import { Provider } from 'react-redux';
import store from '../store';
//Pages
import Header from './pageComponents/header/Header';
import Aside from './pageComponents/aside/Aside';
import Page from './pageComponents/page/Page';
import Slider from './pageComponents/slider/Slider';
import Footer from './pageComponents/footer/Footer';
import Login from './accounts/Login';
import Register from './accounts/Register';

import PrivateRout from './common/PrivateRout'
// CSS
import css from './App.css'


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Router>
                        <Header />
                        <Aside />
                        <Route path="/vendita" exact component={Slider} />
                        <Route path="/vendita/books" component={Page} />
                        <PrivateRout path="/about" component={Page} />
                        <Route path="/vendita/register" component={Register} />
                        <Route path="/vendita/login" component={Login} />
                        <Footer />
                    </Router>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

