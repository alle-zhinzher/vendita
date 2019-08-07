import React, { Component } from 'react';
import PropTypes from "prop-types";
//Redux
import { getPurchasedUserBooks } from "../../actions/user";
import { connect } from "react-redux";
//Components
import SmallPurcaseCart from './smallCart/SmallPurcaseCart';

class PurchasedBooks extends Component {
    static propTypes = {
        userPurchasedBooks: PropTypes.array,
        user: PropTypes.object,

        getPurchasedUserBooks: PropTypes.func.isRequired,
    };
    componentWillMount() {
        this.props.getPurchasedUserBooks(this.props.user.id);
    }
    render() {
        const bookPage = this.props.userPurchasedBooks.map(book =>
            <SmallPurcaseCart
                key={book.id}
                book={book}
                sold={false}
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
})(PurchasedBooks);