import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    getBooksByGenre,
    sortBooksByPrice,
    sortBooksByPages,
    getBooks,
} from '../../../actions/books';
import css from './Aside.css'
import { Link } from "react-router-dom";

import Search from './Search'


class Aside extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        sortedBooks: PropTypes.array.isRequired,

        getBooks: PropTypes.func.isRequired,
        getBooksByGenre: PropTypes.func.isRequired,
        sortBooksByPrice: PropTypes.func.isRequired,
        sortBooksByPages: PropTypes.func.isRequired,
    }
    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <aside>

                <input type="checkbox" name="toggle" id="aside" className="toggleMenu" />
                <label htmlFor="aside" className="toggleMenu">
                    <img src="http://127.0.0.1:8000/media/profile_pics/search.svg" />
                </label>

                <div className="filter-wrapp">
                    <h2>Filter by:</h2>
                    <div className="category">
                        <h4>Genre</h4>
                        <Link className="asideButton"
                            onClick={() => this.props.getBooksByGenre("history")}
                            to="/vendita/books">Historycal</Link>
                        <Link className="asideButton"
                            onClick={() => this.props.getBooksByGenre("roman")}
                            to="/vendita/books">Romans</Link>
                        <Link className="asideButton"
                            onClick={() => this.props.getBooksByGenre("novel")}
                            to="/vendita/books">Novella</Link>
                        <Link className="asideButton"
                            onClick={() => this.props.getBooksByGenre("fantasy")}
                            to="/vendita/books">Fantasy</Link>
                    </div>

                    <h2>Sort by:</h2>
                    <div className="category">
                        <h4>Price:</h4>
                        <Link className="asideButton"
                            onClick={() => this.props.sortBooksByPrice(this.props.sortedBooks, false)}
                            to="/vendita/books">From lesser to greater</Link>
                        <Link className="asideButton"
                            onClick={() => this.props.sortBooksByPrice(this.props.sortedBooks, true)}
                            to="/vendita/books">From greater to lesser</Link>
                        <h4>Pages:</h4>
                        <Link className="asideButton"
                            onClick={() => this.props.sortBooksByPages(this.props.sortedBooks, false)}
                            to="/vendita/books">From lesser to greater</Link>
                        <Link className="asideButton"
                            onClick={() => this.props.sortBooksByPages(this.props.sortedBooks, true)}
                            to="/vendita/books">From greater to lesser</Link>
                    </div>

                    <h2>Search:</h2>
                    <div className="category">
                        <Search />
                    </div>

                </div>
            </aside >
        )
    }
}


const mapStateToProps = state => ({
    books: state.booksReducer.books,
    sortedBooks: state.booksReducer.sortedBooks,
});

export default connect(mapStateToProps, { getBooks, getBooksByGenre, sortBooksByPrice, sortBooksByPages })(Aside);