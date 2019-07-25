//React
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider, connect } from 'react-redux';
import store from '../store';
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Header from './pageComponents/header/Header';
import Aside from './pageComponents/aside/Aside';
import Slider from './pageComponents/slider/Slider';
import About from './pageComponents/about/About';
import BookList from './pageComponents/bookList/BookList';
import Footer from './pageComponents/footer/Footer';
// CSS
import css from './App.css'


class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="container">
                        <Header />
                        <Aside />
                        <Route path="/vendita" exact component={Slider} />
                        <Route path="/vendita/books" component={BookList} />
                        <Route path="/about" component={About} />
                    </div>
                    <Footer />
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

