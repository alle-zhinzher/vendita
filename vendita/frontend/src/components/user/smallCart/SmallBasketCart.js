import React, { Component } from 'react'
//Router
import { Link } from "react-router-dom";
//CSS STYLES
import css from './SmallCart.css'

class SmallBasketCart extends Component {
    render() {
        return (
            <section className="small-cart">
                <div className="cart-image">
                    <img src={this.props.book.image} alt="small-cart-image" />
                </div>
                <div className="cart-property">
                    <h4>Book:   <span className="grey">{this.props.book.name}</span></h4>
                    <h5>Author: <span className="grey">{this.props.book.author}</span></h5>
                </div>
                <div className="cart-property">
                    <h5 className="max-price">
                        Price: <span>{this.props.book.cost}</span>
                    </h5>
                    <h5 className="max-price">
                        My Price: <span>{this.props.book.customer_price}</span>
                    </h5>
                    <h2 className="book-cart-status">
                        Status: Wait for owner apply
                    </h2>
                </div>
                <div className="cart-button">
                    <Link
                        to={`/vendita/book/${this.props.book.id}`}
                        className="small-btn btn-view">
                        View
                    </Link>
                    <button
                        onClick={() =>
                            this.props.cencel(this.props.book.id, this.props.book.created_at)
                        }
                        className="small-btn btn-delete">
                        Cancel
                    </button>
                </div>
            </section >
        )
    }
}


export default SmallBasketCart;
