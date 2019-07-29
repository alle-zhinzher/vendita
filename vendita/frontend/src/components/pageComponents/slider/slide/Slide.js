import React, { Component } from 'react'
//css
import css from './Slide.css'


class Slide extends Component {
    render() {
        const slideStatus = this.props.activeSlide === this.props.index ?
            "active" : "disable"

        return (
            <div className={slideStatus}>
                <div className="book-image">
                    <img src={this.props.book.image} alt="slider-image" />
                </div>
                <div className="book-propeties">
                    <h4>{this.props.book.name}</h4>
                    <h4>{this.props.book.author}</h4>
                    <section className="prices-block">
                        <span className="old-price">{this.props.book.cost}$</span>
                        =
                        <span className="new-price">{this.props.book.cost * 0.75}$</span>
                    </section>
                    <button className="btn-buy">Buy Now</button>
                </div>
            </ div >
        )
    }
}

export default Slide