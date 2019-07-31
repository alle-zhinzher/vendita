import React, { Component } from 'react'
//Router
import { Link } from "react-router-dom";
//CSS STYLES
import css from './SmallCart.css'

class SmallCart extends Component {
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
                    <h5 className="max-price">Price: <span>{this.props.book.cost}</span></h5>
                </div>
                <div className="cart-button">
                    <Link
                        to={`/vendita/book/${this.props.book.id}`}
                        className="small-btn btn-view">View
                    </Link>
                    <button
                        onClick={() => this.props.apply(
                            this.props.book.id,
                            4,
                            this.props.book.created_at,
                            400
                        )}
                        className="small-btn btn-apply">Apply</button>
                    <button
                        onClick={() => this.props.delete(this.props.book.id)}
                        className="small-btn btn-delete">Delete</button>
                </div>
            </section >
        )
    }
}


export default SmallCart;
