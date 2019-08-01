import React, { Component } from 'react';
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { getUserSoldBooks } from "../../actions/user";
//Components
import SmallPurcaseCart from './smallCart/SmallPurcaseCart';

class purchasedBooks extends Component {
    static propTypes = {
        userSoldBooks: PropTypes.array.isRequired,
        user: PropTypes.object,

        getUserSoldBooks: PropTypes.func.isRequired,
    };
    componentWillMount() {
        this.props.getUserSoldBooks(this.props.user.id);
    }
    render() {
        const bookPage = this.props.userSoldBooks.map(book =>
            <SmallPurcaseCart
                key={book.id}
                book={book}
                sold={true}
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
    userSoldBooks: state.userReducer.userSoldBooks,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, {
    getUserSoldBooks,
})(purchasedBooks);