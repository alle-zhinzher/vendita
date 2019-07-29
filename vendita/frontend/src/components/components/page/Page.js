import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
//Redux reducers
import {
    prevPage,
    nextPage,
    resetPaginator,
    jumpToPage,
} from '../../../actions/paginator';
//Components
import Cart from './cart/Cart';
import Paginator from './paginator/Paginator';
//CSS Styles
import css from './Page.css'


class BookList extends Component {
    static propTypes = {
        sortedBooks: PropTypes.array.isRequired,
        activePage: PropTypes.number.isRequired,
        checkSum: PropTypes.number.isRequired,

        prevPage: PropTypes.func.isRequired,
        nextPage: PropTypes.func.isRequired,
        jumpToPage: PropTypes.func.isRequired,
        resetPaginator: PropTypes.func.isRequired,
    }


    render() {
        const bookPage = this.props.sortedBooks.map((book, index = 1) =>
            <Cart key={book.id} book={book} index={index++} active_page={this.props.activePage} />
        )
        return (

            <section className="content-section" >
                <section className="book-page">
                    {this.props.sortedBooks.map((book, index = 1) =>
                        <Cart key={book.id} book={book} index={index++} active_page={this.props.activePage} />
                    )
                    }
                </section>

                {this.props.sortedBooks.length === 0 ?
                    <h2>Item not found</h2>
                    :
                    ""
                }

                <Paginator
                    activePage={this.props.activePage}
                    booksCount={this.props.sortedBooks.length}
                    prevPage={this.props.prevPage}
                    nextPage={this.props.nextPage}
                    resetPaginator={this.props.resetPaginator}
                    jumpToPage={this.props.jumpToPage}
                    checkSum={this.props.checkSum}
                />

            </section >
        )
    }
}


const mapStateToProps = state => ({
    sortedBooks: state.booksReducer.sortedBooks,
    activePage: state.paginatorReducer.activePage,
    checkSum: state.paginatorReducer.checkSum,
});

export default connect(mapStateToProps, {
    prevPage,
    nextPage,
    resetPaginator,
    jumpToPage,
})(BookList);
