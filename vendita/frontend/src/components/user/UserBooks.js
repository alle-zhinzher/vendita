import React, { Component } from 'react';
import PropTypes from "prop-types";
//Router
import { Redirect } from "react-router-dom";
//Redux
import { getUserBooks, deleteBook, newCustomer } from "../../actions/user";
import { connect } from "react-redux";
//Components
import SmallCart from './smallCart/SmallCart';

class UserBooks extends Component {
    static propTypes = {
        userBooks: PropTypes.array.isRequired,
        user: PropTypes.object,

        getUserBooks: PropTypes.func.isRequired,
        deleteBook: PropTypes.func.isRequired,
        newCustomer: PropTypes.func.isRequired,
        basketLoad: PropTypes.func.isRequired
    };
    componentWillMount() {
        this.props.getUserBooks();
    }
    render() {
        const bookPage = this.props.userBooks.map(book =>
            <SmallCart
                key={book.id} book={book}
                delete={this.props.deleteBook}
                apply={this.props.newCustomer}
                user={this.props.user}
            />
        );

        return (
            <section className="content-section" >
                <div className="my-books-wrapp">
                    {bookPage}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    userBooks: state.userReducer.userBooks,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, {
    getUserBooks,
    deleteBook,
    newCustomer,
})(UserBooks);
