import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { searchBooks } from '../../../actions/books';
import { Link, Redirect } from "react-router-dom";


class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,


        searchBooks: PropTypes.func.isRequired,
    }
    componentWillMount() {
        this.setState({
            searchField: ''
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.searchField)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.searchBooks(this.props.books, this.state.searchField)}
                    action="/vendita/books">
                    <input type="text" name="searchField" placeholder="Search now!" onChange={this.handleChange} />
                    <Link className="link"
                        onClick={() => this.props.searchBooks(this.props.books, this.state.searchField)}
                        to="/vendita/books">Search</Link>
                </form>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    books: state.booksReducer.books,
});

export default connect(mapStateToProps, { searchBooks })(Search);
