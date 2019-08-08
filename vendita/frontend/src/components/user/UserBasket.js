import React, { Component } from 'react';
import PropTypes from "prop-types";
//Router
import { Redirect } from "react-router-dom";
//Redux
import { getUserBooksInBasket, cencelUserPurchase } from "../../actions/user";
import { connect } from "react-redux";
//Components
import SmallBasketCart from './smallCart/SmallBasketCart';

class UserBasket extends Component {
    static propTypes = {
        userBookInBasket: PropTypes.array,
        user: PropTypes.object,
        basketLoad: PropTypes.object,

        cencelUserPurchase: PropTypes.func.isRequired,
        getUserBooksInBasket: PropTypes.func.isRequired,
    };
    componentWillMount() {
        this.props.getUserBooksInBasket(this.props.user.id);
    }
    render() {
        const bookPage = this.props.userBookInBasket.map(book =>
            <SmallBasketCart
                key={book.id}
                book={book}
                cencel={this.props.cencelUserPurchase}
            />
        );
        return (
            <section className="content-section">
                <h3 className="user-title">User Basket</h3>
                <div className="my-books-wrapp">
                    {bookPage}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    userBookInBasket: state.userReducer.userBookInBasket,
    basketLoad: state.userReducer.basketLoad,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, {
    getUserBooksInBasket,
    cencelUserPurchase,
})(UserBasket);