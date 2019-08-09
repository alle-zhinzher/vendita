import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
// Reducer methods
import { getHootBooks } from '../../../actions/books';
//Components
import Slide from "./slide/Slide.jsx"
import SlideControler from './sliderControler/SlideControler.jsx';
// CSS styles
import css from './Slider.css'


class Slider extends Component {
    state = {
        activeSlide: 0,
    }

    static propTypes = {
        hootBooks: PropTypes.array.isRequired,
        getHootBooks: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getHootBooks();
    }

    nextSlide = () => {
        let slide = this.state.activeSlide;
        if (slide === this.props.hootBooks.length - 1) {
            slide = -1;
        }
        this.setState({ activeSlide: slide + 1 })
    }

    prevSlide = () => {
        let slide = this.state.activeSlide;
        if (slide === 0) {
            slide = this.props.hootBooks.length
        }
        this.setState({ activeSlide: slide - 1 })
    }

    render() {
        const slides = this.props.hootBooks.map((book, index = 0) =>
            <Slide
                key={book.id}
                book={book}
                index={index++}
                activeSlide={this.state.activeSlide} />
        );
        return (
            <section className="content-section slider">
                <div className="slide">
                    <SlideControler
                        hendleFunc={this.prevSlide}
                        controlerText={'<'}
                    />

                    {slides}

                    <SlideControler
                        hendleFunc={this.nextSlide}
                        controlerText={'>'}
                    />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    hootBooks: state.booksReducer.hootBooks,
});

export default connect(mapStateToProps, { getHootBooks })(Slider);
