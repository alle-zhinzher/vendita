import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './Cart';
import css from './Books.css'


class BookList extends Component {
    static propTypes = {
        sorted_books: PropTypes.array.isRequired,
    }

    componentWillMount() {
        this.setState({
            active_page: 1,
            check_lenght: this.props.sorted_books.length
        })
    }

    new_paginator = () => {
        this.setState({
            active_page: 1,
            check_lenght: this.props.sorted_books.length
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
        const page = this.state.active_page
        const itemCount = this.props.sorted_books.length
        return (
            <section className="content-section" >
                <section className="book-list">
                    {this.props.sorted_books.map((book, index = 1) =>
                        <Cart key={book.id} book={book} index={index++} active_page={this.state.active_page} />
                    )}
                </section>
                <section className="paginator">
                    <button className={page === 1 ? "disable" : "paginator-scroll"} onClick={() => this.prev_page()}>&#x2039;</button>

                    <button className={page === 1 ? "disable" : ""} onClick={() => this.change_page(this.state.active_page - 1)}>
                        {this.state.active_page - 1}</button>
                    <button id="paginator-active">
                        {this.state.check_lenght === itemCount ? this.state.active_page : this.new_paginator()}</button>
                    <button className={page >= itemCount / 4 ? "disable" : ""} onClick={() => this.change_page(this.state.active_page + 1)}>
                        {this.state.active_page + 1}</button>

                    <button className={page >= itemCount / 4 ? "disable" : "paginator-scroll"} onClick={() => this.next_page()}>&#x203a;</button>
                </section >

            </section >
        )
    }
}


const mapStateToProps = state => ({
    sorted_books: state.booksReducer.sorted_books,
});

export default connect(mapStateToProps)(BookList);
