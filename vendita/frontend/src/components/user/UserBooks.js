import React, { Component } from 'react';
import PropTypes from "prop-types";
//Router
import { Redirect } from "react-router-dom";
//Redux
import { getUserBooks, deleteBook, approveTheSale } from "../../actions/user";
import { connect } from "react-redux";
//Components
import SmallCart from './smallCart/SmallCart.jsx';

class UserBooks extends Component {
    static propTypes = {
        userBooks: PropTypes.array,
        user: PropTypes.object,
        bookApproved: PropTypes.bool,
        getUserBooks: PropTypes.func.isRequired,
        deleteBook: PropTypes.func.isRequired,
        approveTheSale: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getUserBooks();
    }

    render() {
        if (this.props.bookApproved) {
            return <Redirect to="/vendita/user/book/sold" />;
        }
        const bookPage = this.props.userBooks.map(book =>
            <SmallCart
                key={book.id} book={book}
                delete={this.props.deleteBook}
                approve={this.props.approveTheSale}
                user={this.props.user}
            />
        );
        return (
            <section className="content-section" >
                <h3 className="user-title">My books</h3>
                <div className="my-books-wrapp">
                    {bookPage}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    userBooks: state.userReducer.userBooks,
    bookApproved: state.userReducer.bookApproved,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, {
    getUserBooks,
    deleteBook,
    approveTheSale,
})(UserBooks);
