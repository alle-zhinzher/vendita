import React, { Component } from 'react'
import PropTypes from "prop-types";
//Router
import { Redirect } from "react-router-dom";
//Redux
//Redux
import { connect } from "react-redux";
import { newCustomer } from "../../actions/user";
import { getBooksByID } from "../../../actions/books";
//Components
import BookCart from './bookCart/BookCart'
class BookView extends Component {
    static propTypes = {
        currentBook: PropTypes.array.isRequired,
        user: PropTypes.object.isRequired,
        getBooksByID: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getBooksByID(params.bookID)
    }

    render() {
        return (
            <section className="content-section" >
                {this.props.currentBook.map(book =>
                    <BookCart
                        key={book.id}
                        book={book}
                        newCustomer={this.props.newCustomer}
                        user={this.props.user}
                    />
                )}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currentBook: state.booksReducer.currentBook,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, { getBooksByID, newCustomer })(BookView);