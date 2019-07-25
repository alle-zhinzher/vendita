import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './Cart';
import css from './Books.css'


class BookList extends Component {
    static propTypes = {
        sortedBooks: PropTypes.array.isRequired,
    }

    componentWillMount() {
        this.setState({
            active_page: 1,
            check_lenght: this.props.sortedBooks.length
        })
    }

    new_paginator = () => {
        this.setState({
            active_page: 1,
            check_lenght: this.props.sortedBooks.length
        })
    }

    change_page(page) {
        this.setState({
            active_page: page
        })
    }
    next_page() {
        this.setState({
            active_page: this.state.active_page + 1
        })
    }

    prev_page() {
        this.setState({
            active_page: this.state.active_page - 1
        })
    }



    render() {
        return (

            <section className="content-section" >
                <section className="book-list">
                    {this.props.sortedBooks.map((book, index = 1) =>
                        <Cart key={book.id} book={book} index={index++} active_page={this.state.active_page} />
                    )}
                </section>

                {this.props.sortedBooks.length === 0 ?
                    <h2>Item not found</h2>
                    :
                    ""
                }

                <section className="paginator">
                    <button
                        className={this.state.active_page === 1 ? "disable" : "paginator-scroll"}
                        onClick={() => this.prev_page()}>
                        &#x2039;
                    </button>

                    <button
                        className={this.state.active_page === 1 ? "disable" : ""}
                        onClick={() => this.change_page(this.state.active_page - 1)}>
                        {this.state.active_page - 1}
                    </button>

                    <button
                        className={this.props.sortedBooks.length === 0 ? "disable" : ""}
                        id="paginator-active">
                        {this.state.check_lenght === this.props.sortedBooks.length ?
                            this.state.active_page
                            :
                            this.new_paginator()}
                    </button>

                    <button
                        className={
                            this.state.active_page >= this.props.sortedBooks.length / 4 ?
                                "disable" : ""
                        }
                        onClick={() => this.change_page(this.state.active_page + 1)}>
                        {this.state.active_page + 1}
                    </button>

                    <button
                        className={this.state.active_page >= this.props.sortedBooks.length / 4 ?
                            "disable" : "paginator-scroll"
                        }
                        onClick={() => this.next_page()}>
                        &#x203a;
                    </button>
                </section >
            </section >
        )
    }
}


const mapStateToProps = state => ({
    sortedBooks: state.booksReducer.sortedBooks,
});

export default connect(mapStateToProps)(BookList);
