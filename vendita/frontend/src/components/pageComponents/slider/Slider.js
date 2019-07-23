import React, { Component } from 'react'
import css from './Slider.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHootBooks } from '../../../actions/books';

import Slide from "./Slide"


class Slider extends Component {

    static propTypes = {
        hoot_books: PropTypes.array.isRequired,
        getHootBooks: PropTypes.func.isRequired,

    }
    componentWillMount() {
        this.props.getHootBooks();
        this.setState({
            active_index: 0
        })
    }

    nextItem() {
        if (this.state.active_index === this.props.hoot_books.length - 1) {
            this.setState({ active_index: 0 })
        } else {
            this.setState({ active_index: this.state.active_index + 1 })
        }
        console.log(this.state.active_index)
    }
    prevItem() {
        if (this.state.active_index === 0) {
            this.setState({ active_index: this.props.hoot_books.length - 1 })
        } else {
            this.setState({ active_index: this.state.active_index - 1 })
        }
        console.log(this.state.active_index)
    }

    render() {
        return (
            <section className="slider">
                <div className="slide">
                    <button className="slider-controler" onClick={() => this.prevItem()}>&#x2039;</button>
                    {this.props.hoot_books.map((book, index = 0) =>
                        <Slide key={book.id} book={book} index={index++} active_index={this.state.active_index} />
                    )}
                    <button className="slider-controler" onClick={() => this.nextItem()}>&#x203a;</button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    hoot_books: state.booksReducer.hoot_books,
});

export default connect(mapStateToProps, { getHootBooks })(Slider);
