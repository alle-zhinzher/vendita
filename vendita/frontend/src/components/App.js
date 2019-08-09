//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRout from './common/PrivateRout'
//Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from "../actions/auth";
//Pages
import Header from './layout/header/Header';
import Aside from './layout/aside/Aside';
import About from './layout/about/About.jsx';
import Page from './layout/page/Page';
import Slider from './layout/slider/Slider';
import Footer from './layout/footer/Footer.jsx';
import Login from './accounts/Login';
import Register from './accounts/Register';
import NewBook from './user/NewBook';
import UserBooks from './user/UserBooks';
import UserBasket from './user/UserBasket';
import PurchasedBooks from './user/PurchasedBooks';
import UserSoldBooks from './user/UserSoldBooks';
import BookView from './layout/bookView/BookView';
// CSS
import css from './App.css'

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Router>
                        <Header />
                        <Aside />
                        <Route path="/vendita" exact component={Slider} />
                        <Route path="/vendita/books" component={Page} />
                        <Route path="/vendita/about" component={About} />
                        <Route path="/vendita/book/:bookID" component={BookView} />
                        <Route path="/vendita/register" component={Register} />
                        <Route path="/vendita/login" component={Login} />
                        <PrivateRout path="/vendita/user/book/new" component={NewBook} />
                        <PrivateRout path="/vendita/user/books" component={UserBooks} />
                        <PrivateRout path="/vendita/user/book/basket" component={UserBasket} />
                        <PrivateRout path="/vendita/user/book/purchased" component={PurchasedBooks} />
                        <PrivateRout path="/vendita/user/book/sold" component={UserSoldBooks} />
                        <Footer />
                    </Router>
                </div>
            </Provider >
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

