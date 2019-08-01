import React, { Component } from 'react';
import PropTypes from "prop-types";
//Redux
import { getUserBooksInBasket } from "../../actions/user";
import { connect } from "react-redux";
//Components
import SmallBasketCart from './smallCart/SmallBasketCart';

class UserBasket extends Component {
    static propTypes = {
        userBookInBasket: PropTypes.array.isRequired,
        user: PropTypes.object,
        basketLoad: PropTypes.object.isRequired,

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
    userBookInBasket: state.userReducer.userBookInBasket,
    basketLoad: state.userReducer.basketLoad,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, {
    getUserBooksInBasket,
})(UserBasket);