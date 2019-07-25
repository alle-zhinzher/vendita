import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
// Reducer methods
import { getHootBooks } from '../../../actions/books';
import { nextSlide, prevSlide } from '../../../actions/slider';
//Components
import Slide from "./slide/Slide"
import SlideControler from './sliderControler/SlideControler';
// CSS styles
import css from './Slider.css'


class Slider extends Component {
    static propTypes = {
        hootBooks: PropTypes.array.isRequired,
        activeSlide: PropTypes.number.isRequired,

        getHootBooks: PropTypes.func.isRequired,
        nextSlide: PropTypes.func.isRequired,
        prevSlide: PropTypes.func.isRequired,
    }
    componentWillMount() {
        this.props.getHootBooks();
    }
    render() {
        const activeSlide = this.props.activeSlide;
        const slideLength = this.props.hootBooks.length;
        const slides = this.props.hootBooks
            .map((book, index = 0) =>
                <Slide key={book.id} book={book} index={index++} active_index={activeSlide} />
            );
        return (
            <section className="content-section slider">
                <div className="slide">
                    <SlideControler
                        activeSlide={activeSlide}
                        slideLength={slideLength}
                        hendleFunc={this.props.prevSlide}
                        controlerText={'<'}
                    />
                    {slides}
                    <SlideControler
                        activeSlide={activeSlide}
                        slideLength={slideLength}
                        hendleFunc={this.props.nextSlide}
                        controlerText={'>'}
                    />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    hootBooks: state.booksReducer.hootBooks,
    activeSlide: state.sliderReducer.activeSlide,
});

export default connect(mapStateToProps, { getHootBooks, nextSlide, prevSlide })(Slider);
