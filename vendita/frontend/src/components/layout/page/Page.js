import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
//Components
import Cart from './cart/Cart.jsx';
import Paginator from './paginator/Paginator.jsx';
//CSS Styles
import css from './Page.css'


class BookList extends Component {
    state = {
        activePage: 1,
        checkSum: 0,
    }

    static propTypes = {
        sortedBooks: PropTypes.array.isRequired,
    }

    prevPage = () => {
        this.setState({ activePage: this.state.activePage - 1 })
    }

    nextPage = () => {
        this.setState({ activePage: this.state.activePage + 1 })

        console.log(this.state.activePage)
    }

    jumpToPage = (pageNumber) => {
        this.setState({ activePage: pageNumber })
    }

    resetPaginator = (newCheckSum) => {
        this.setState({
            activePage: 1,
            checkSum: newCheckSum,
        })
    }

    render() {
        return (

            <section className="content-section" >
                <section className="book-page">
                    {this.props.sortedBooks.map((book, index = 1) =>
                        <Cart
                            key={book.id}
                            book={book}
                            index={index++}
                            active_page={this.state.activePage}
                        />
                    )
                    }
                </section>

                {this.props.sortedBooks.length === 0 ?
                    <h2>Item not found</h2>
                    :
                    ""
                }
                <Paginator
                    activePage={this.state.activePage}
                    checkSum={this.state.checkSum}
                    prevPage={this.prevPage}
                    nextPage={this.nextPage}
                    jumpToPage={this.jumpToPage}
                    booksCount={this.props.sortedBooks.length}
                    resetPaginator={this.resetPaginator}
                />
            </section >
        )
    }
}


const mapStateToProps = state => ({
    sortedBooks: state.booksReducer.sortedBooks,
});

export default connect(mapStateToProps, {})(BookList);
