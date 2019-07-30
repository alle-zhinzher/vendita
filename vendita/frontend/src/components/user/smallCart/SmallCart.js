import React, { Component } from 'react'
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
                    <button className="small-btn btn-view">View</button>
                    <button className="small-btn btn-apply">Apply</button>
                    <button className="small-btn btn-delete">Delete</button>
                </div>
            </section>
        )
    }
}


export default SmallCart;
