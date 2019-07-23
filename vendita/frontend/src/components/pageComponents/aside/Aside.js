import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooksByGenre } from '../../../actions/books';
import css from './Aside.css'
import { Link } from "react-router-dom";


class Aside extends Component {

    static propTypes = {
        hoot_books: PropTypes.array.isRequired,
        getBooksByGenre: PropTypes.func.isRequired,

    }
    render() {
        return (
            <aside>
                <input type="checkbox" name="toggle" id="aside" className="toggleMenu" />
                <label htmlFor="aside" className="toggleMenu"><img src="http://127.0.0.1:8000/media/profile_pics/search.svg" /></label>
                <div className="filter-wrapp">
                    <h2>Filter by:</h2>
                    <div className="category">
                        <h4>Genre</h4>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre("history")} to="/books">Historycal</Link>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre("roman")} to="/books">Romans</Link>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre("novel")} to="/books">Novella</Link>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre("fantasy")} to="/books">Fantasy</Link>
                    </div>
                    <h2>Sort by:</h2>
                    <div className="category">
                        <h4>Price:</h4>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre(17)} to="/books">From lesser to greater</Link>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre(17)} to="/books">From greater to lesser</Link>
                        <h4>Pages:</h4>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre(17)} to="/books">From lesser to greater</Link>
                        <Link className="asideButton" onClick={() => this.props.getBooksByGenre(17)} to="/books">From greater to lesser</Link>
                    </div>
                </div>

            </aside >
        )
    }
}


const mapStateToProps = state => ({
    hoot_books: state.booksReducer.hoot_books,
});

export default connect(mapStateToProps, { getBooksByGenre })(Aside);