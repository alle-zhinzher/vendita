import React, { Component } from 'react'
import PropTypes from "prop-types";
//Router
import { Redirect } from "react-router-dom";
//Redux
import { getBooksByID } from "../../../actions/books";
import { connect } from "react-redux";
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
                {this.props.currentBook.map(book => <p>{book.name}</p>)}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currentBook: state.booksReducer.currentBook,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, { getBooksByID })(BookView);