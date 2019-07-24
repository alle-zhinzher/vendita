import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './Cart';

class BookList extends Component {
    static propTypes = {
        sorted_books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <section className="content-section book-list" >
                {this.props.sorted_books.map((book, index = 0) =>
                    <Cart key={book.id} book={book} index={index++} />
                )}
            </section>
        )
    }
}


const mapStateToProps = state => ({
    sorted_books: state.booksReducer.sorted_books,
});

export default connect(mapStateToProps)(BookList);
