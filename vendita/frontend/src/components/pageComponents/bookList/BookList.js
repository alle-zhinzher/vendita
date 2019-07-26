import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
//Redux reducers
import {
    prevPage,
    nextPage,
    setPaginator,
    resetPaginator,
    jumpToPage,
} from '../../../actions/paginator';
//Components
import Cart from './Cart';
//CSS Styles
import css from './Books.css'


class BookList extends Component {
    static propTypes = {
        sortedBooks: PropTypes.array.isRequired,
        activePage: PropTypes.number.isRequired,
        checkSum: PropTypes.number.isRequired,

        prevPage: PropTypes.func.isRequired,
        nextPage: PropTypes.func.isRequired,
        jumpToPage: PropTypes.func.isRequired,
        setPaginator: PropTypes.func.isRequired,
        resetPaginator: PropTypes.func.isRequired,
    }


    render() {
        return (

            <section className="content-section" >
                <section className="book-list">
                    {this.props.sortedBooks.map((book, index = 1) =>
                        <Cart key={book.id} book={book} index={index++} active_page={this.props.activePage} />
                    )}
                </section>

                {this.props.sortedBooks.length === 0 ?
                    <h2>Item not found</h2>
                    :
                    ""
                }

                <section className="paginator">
                    <button
                        className={this.props.activePage === 1 ? "disable" : "paginator-scroll"}
                        onClick={() => this.props.prevPage(this.props.activePage)}>
                        &#x2039;
                    </button>

                    <button
                        className={this.props.activePage === 1 ? "disable" : ""}
                        onClick={() => this.props.jumpToPage(this.props.activePage - 1)}>
                        {this.props.activePage - 1}
                    </button>

                    <button
                        className={this.props.sortedBooks.length === 0 ? "disable" : ""}
                        id="paginator-active">
                        {this.props.checkSum === this.props.sortedBooks.length ?
                            this.props.activePage
                            :
                            this.props.resetPaginator(this.props.sortedBooks.length)}
                    </button>

                    <button
                        className={
                            this.props.activePage >= this.props.sortedBooks.length / 4 ?
                                "disable" : ""
                        }
                        onClick={() => this.props.jumpToPage(this.props.activePage + 1)}>
                        {this.props.activePage + 1}
                    </button>

                    <button
                        className={this.props.activePage >= this.props.sortedBooks.length / 4 ?
                            "disable" : "paginator-scroll"
                        }
                        onClick={() => this.props.nextPage(this.props.activePage)}>
                        &#x203a;
                    </button>
                </section >
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
    setPaginator,
    resetPaginator,
    jumpToPage,
})(BookList);
