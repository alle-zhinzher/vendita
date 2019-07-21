import React, { Component } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBooks } from '../../actions/books';

class TestComponent extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        getBooks: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        return (
            <div>
                {this.props.books.map(book => (
                    <div key={book.id}>
                        <p><b>{book.name}</b> - {book.author}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.booksReducer.books
});

export default connect(mapStateToProps, { getBooks })(TestComponent);
