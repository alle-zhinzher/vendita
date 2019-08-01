import React, { Component } from 'react';
import PropTypes from "prop-types";
//Redux
import { getPurchasedUserBooks } from "../../actions/user";
import { connect } from "react-redux";
//Components
import SmallBasketCart from './smallCart/SmallBasketCart';

class purchasedBooks extends Component {
    static propTypes = {
        userPurchasedBooks: PropTypes.array.isRequired,
        user: PropTypes.object,

        getPurchasedUserBooks: PropTypes.func.isRequired,
    };
    componentWillMount() {
        this.props.getPurchasedUserBooks(this.props.user.id);
    }
    render() {
        const bookPage = this.props.userPurchasedBooks.map(book =>
            <SmallBasketCart
                key={book.id}
                book={book}
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
    userPurchasedBooks: state.userReducer.userPurchasedBooks,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, {
    getPurchasedUserBooks,
})(purchasedBooks);