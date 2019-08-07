import React, { Component } from 'react'
//Router
import { Link } from "react-router-dom";
//CSS STYLES
import css from './SmallCart.css'

class SmallPurcaseCart extends Component {
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
                        {this.props.sold ? 'My Price: ' : "Owner Price: "}
                        <span>{this.props.book.cost}$</span>
                    </h5>
                    <h5 className="max-price">
                        {this.props.sold ? "Customer price: " : 'My Price: '}
                        <span>{this.props.book.customer_price}$</span>
                    </h5>

                    {this.props.sold ?
                        <h2 className="book-cart-status">
                            Status: Book sold out!
                        </h2>
                        :
                        <h2 className="book-cart-status">
                            Status: Its your book!
                        </h2>
                    }
                </div>
                <div className="cart-button">
                    <Link
                        to={`/vendita/book/${this.props.book.id}`}
                        className="small-btn btn-view btn-purc">
                        View
                    </Link>
                </div>
            </section >
        )
    }
}


export default SmallPurcaseCart;
