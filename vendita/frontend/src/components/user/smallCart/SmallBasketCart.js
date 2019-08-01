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
                    <h5 className="max-price">Price: <span>{this.props.book.cost}</span></h5>
                </div>
            </section >
        )
    }
}


export default SmallBasketCart;
