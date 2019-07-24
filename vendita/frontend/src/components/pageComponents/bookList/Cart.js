import React, { Component } from 'react'

class Cart extends Component {
    render() {

        const max = this.props.active_page * 4;
        const min = max - 4;

        const page_status = this.props.index >= min & this.props.index < max ?
            "active-page book-cart"
            :
            "disable"

        return (
            <div className={page_status}>
                <div className="book-cart-image">
                    <img src={this.props.book.image} alt="book image" />
                </div>
                <div className="book-name">
                    <h3>{this.props.book.name}</h3>
                    <h4>{this.props.book.author}</h4>
                </div>
                <div className="book-discripion">
                    <p>{this.props.book.discrition}</p>
                    <h4>{this.props.book.pages}- pages</h4>
                </div>

                <h2>Price: <span className="book-price">{this.props.book.cost}$</span></h2>

            </div>
        )
    }
}

export default Cart