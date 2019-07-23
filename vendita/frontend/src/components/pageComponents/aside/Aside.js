import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHootBooks } from '../../../actions/books';
import css from './Aside.css'
import { Link } from "react-router-dom";


class Aside extends Component {

    static propTypes = {
        hoot_books: PropTypes.array.isRequired,
        getHootBooks: PropTypes.func.isRequired,

    }
    render() {
        return (
            <aside>
                <Link onClick={this.props.getHootBooks()} className="link" exact to="/books">Быт. химия</Link>
            </aside >
        )
    }
}


const mapStateToProps = state => ({
    hoot_books: state.booksReducer.hoot_books,
});

export default connect(mapStateToProps, { getHootBooks })(Aside);