import React, { Component } from 'react'
import css from './Slider.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHootBooks } from '../../../actions/books';

class Slider extends Component {
    static propTypes = {
        hoot_books: PropTypes.array.isRequired,
        getHootBooks: PropTypes.func.isRequired,

    }
    componentDidMount() {
        this.props.getHootBooks();
    }
    getNextItem() {
        this.props.hoot_books.map(book => console.log(book.name));
    }
    render() {
        return (
            <div>
                <button onClick={() => this.getNextItem()}>Prev</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    hoot_books: state.booksReducer.hoot_books
});

export default connect(mapStateToProps, { getHootBooks })(Slider);
