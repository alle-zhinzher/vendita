//React
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import store from '../store';
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Header from './pageComponents/header/Header';
import Aside from './pageComponents/aside/Aside';
import Slider from './pageComponents/slider/Slider';
import About from './pages/about/About';
import BookList from './pages/bookList/BookList';
import Footer from './pageComponents/footer/Footer';

// CSS
import css from './Main.css'


export default class App extends Component {

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="container">
                        <Header />
                        <Aside />
                        <Route path="/vendita" exact component={Slider} />
                        <Route path="/vendita/books" exact component={BookList} />
                    </div>
                    <Footer />
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
