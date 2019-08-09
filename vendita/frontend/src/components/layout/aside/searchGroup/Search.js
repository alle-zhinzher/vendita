import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Redux
import { connect } from 'react-redux';
import { searchBooks } from '../../../../actions/books';
//Router
import { Link } from "react-router-dom";
//CSS Styles
import css from './Search.css';


class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        searchBooks: PropTypes.func.isRequired,
    }

    state = {
        searchField: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="category">
                <h2>Search:</h2>
                <div>
                    <form
                        onSubmit={this.props
                            .searchBooks(this.props.books, this.state.searchField)}
                        action="/vendita/books">
                        <input
                            className="serchField"
                            type="text"
                            name="searchField"
                            placeholder="Search now!"
                            onChange={this.handleChange}
                        />
                        <Link className="serchButton"
                            onClick={() =>
                                this.props.searchBooks(
                                    this.props.books, this.state.searchField
                                )}
                            to="/vendita/books">
                            Search
                        </Link>
                    </form>
                </div >
            </div >
        )
    }
}

const mapStateToProps = state => ({
    books: state.booksReducer.books,
});

export default connect(mapStateToProps, { searchBooks })(Search);
