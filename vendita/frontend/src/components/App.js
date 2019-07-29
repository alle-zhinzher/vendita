//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import store from '../store';
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Page from './components/page/Page';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
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
                        <Route path="/about" component={Page} />
                        <Footer />
                    </Router>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

