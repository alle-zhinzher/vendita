import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Router
import { Link } from "react-router-dom";
//Redux
import { connect } from 'react-redux';
//Reducers
import { getBooksByGenre, getAllBooks } from '../../../actions/books';
//CSS Styles
import css from './Header.css'


class Header extends Component {
    static propTypes = {
        getAllBooks: PropTypes.func.isRequired,
        getBooksByGenre: PropTypes.func.isRequired,
    }
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="http://127.0.0.1:8000/media/profile_pics/logo.svg" alt="Logo" />
                    <h1>Vendita all`astera</h1>
                </div>
                <nav>
                    <input type="checkbox" name="toggle" id="menu" className="toggleMenu" />
                    <label htmlFor="menu" className="toggleMenu"><img src="http://127.0.0.1:8000/media/profile_pics/burger.svg" /></label>
                    <ul>
                        <li><Link className="link" to="/vendita/">home</Link></li>
                        <li><Link
                            onClick={() => this.props.getAllBooks()}
                            className="link"
                            to="/vendita/books">books</Link></li>
                        <li>
                            <input type="checkbox" name="toggle" className="toggleSubmenu" id="sub_m1" />
                            <span className="link" id="sub_m1">genres <span className="row">&#x203a;</span></span>
                            <label htmlFor="sub_m1" className="toggleSubmenu"></label>
                            <ul>
                                <li><Link
                                    onClick={() => this.props.getBooksByGenre("history")}
                                    className="link"
                                    to="/vendita/books">historycal</Link></li>
                                <li><Link
                                    onClick={() => this.props.getBooksByGenre("roman")}
                                    className="link"
                                    to="/vendita/books">romans</Link>
                                </li>
                                <li><Link
                                    onClick={() => this.props.getBooksByGenre("novel")}
                                    className="link"
                                    to="/vendita/books">novell</Link></li>
                                <li><Link
                                    onClick={() => this.props.getBooksByGenre("fantasy")}
                                    className="link"
                                    to="/vendita/books">fanasy</Link></li>
                                <li><Link
                                    onClick={() => this.props.getAllBooks()}
                                    className="link"
                                    to="/vendita/books">all</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link" to="/about">about</Link></li>
                        <li><Link className="link" to="/about">register</Link></li>

                    </ul>
                </nav>
            </header >
        )
    }
}

export default connect(null, { getAllBooks, getBooksByGenre })(Header);

