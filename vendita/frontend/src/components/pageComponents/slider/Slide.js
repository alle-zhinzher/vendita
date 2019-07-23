import React, { Component } from 'react'

class Slide extends Component {
    render() {
        const slide_status = this.props.active_index === this.props.index ?
            "active" : "disable"
        return (
            <div className={slide_status}>
                <div className="book-image">
                    <img src={this.props.book.image} alt="slider-image" />
                </div>
                <div className="book-prop">
                    <h4>{this.props.book.name}</h4>
                    <h4>{this.props.book.author}</h4>

                    <section className="prices">
                        <span className="old-price">{this.props.book.cost}$</span> =
                                <span className="new-price">{this.props.book.cost * 0.75}$</span>
                    </section>
                    <button className="btn-buy">Buy Now</button>
                </div>
            </ div >
        )
    }
}

export default Slide