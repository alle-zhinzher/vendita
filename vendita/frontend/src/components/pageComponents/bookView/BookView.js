import React, { Component } from 'react'
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { newCustomer } from "../../../actions/user";
import { getBooksByID } from "../../../actions/books";
import { loadUser } from "../../../actions/auth";
//Components
import BookCart from './bookCart/BookCart'
class BookView extends Component {
    static propTypes = {
        currentBook: PropTypes.array.isRequired,
        user: PropTypes.object,
        customerLoading: PropTypes.bool.isRequired,

        getBooksByID: PropTypes.func.isRequired,
        loadUser: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.loadUser();
        this.props.getBooksByID(params.bookID);
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
                        customerLoading={this.props.customerLoading}
                    />
                )}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currentBook: state.booksReducer.currentBook,
    user: state.authReducer.user,
    customerLoading: state.userReducer.customerLoading,
});

export default connect(mapStateToProps, {
    getBooksByID,
    newCustomer,
    loadUser,
})(BookView);